import React, {Component} from 'react';
import Layout from "../components/Layout";
import {isMobile} from 'react-device-detect';
import {Formik} from "formik";
import {connect} from "react-redux";
import {FormField} from "../components/FormElements";
import * as Yup from "yup";
import {AuthService} from "../services";
import {catchError} from "../utils";
import {Spinner} from "reactstrap";
import {toast} from "react-toastify";
import {setUser} from "../store/modules/user";


class ProfileScreen extends Component {
    render() {
        const {user: {email, phone, name}} = this.props
        return (
            <Layout noFooter={isMobile} padded={isMobile} title="Profile" innerClass="">
                <div className=" col-12 col-md-10 dash-section__col">
                    <div className="dash-section__content">

                        <Formik
                            initialValues={{current_password: '', password: '', password_confirmation: ''}}
                            validationSchema={Yup.object().shape({
                                current_password: Yup.string().min(5, 'Current Password cannot be less than 6 characters')
                                    .required('Current password is required'),
                                password: Yup.string().min(6, 'Password cannot be less than 6 characters')
                                    .required('Password is required'),
                                password_confirmation: Yup.string().min(6, 'Password cannot be less than 6 characters')
                                    .required('Password confirmation is required'),

                            })}
                            onSubmit={(values, actions) => {
                                AuthService.editPassword(values).then(() => {
                                    toast.success('Password updated successfully')
                                }).catch(catchError).finally(() => {
                                    actions.setSubmitting(false);
                                });
                            }}
                        >
                            {({handleSubmit, handleChange, handleBlur, values, errors, isSubmitting}) => (
                                <form onSubmit={handleSubmit} className="request-quote-form mb-50">
                                    <div className="request-title mb-20">
                                        <h2>Update Password</h2>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <FormField title="Old Password" id="old-password" type="password"
                                                       name="current_password" autoComplete="new-password"/>

                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <FormField id="password" type="password" title="New Password"
                                                       name="password" autoComplete="new-password"
                                                       aria-autocomplete="list"/>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            <FormField id="password-confirm" type="password"
                                                       title="Confirm New Password"
                                                       name="password_confirmation" autoComplete="new-password"/>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <button type="submit" className="btn btn-primary btn-md">
                                                {isSubmitting ? <Spinner/> :
                                                    'Update Password'}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </Formik>

                        <Formik
                            initialValues={{phone, email, name}}
                            validationSchema={Yup.object().shape({
                                phone: Yup.string().min(9, 'Phone number is too short').required('Phone number is required'),
                                email: Yup.string().required('Email is required'),
                                name: Yup.string().min(3, 'Name is too short').required('Name is required'),
                            })}
                            enableReinitialize
                            onSubmit={(values, actions) => {
                                AuthService.update(values).then(({data}) => {
                                    toast.success('You has been updated successfully')
                                    this.props.setUser(data.data)
                                }).catch(catchError).finally(() => {
                                    actions.setSubmitting(false);
                                });
                            }}
                            component={
                                ({handleSubmit, isSubmitting}) =>
                                    (
                                        <form onSubmit={handleSubmit} className="request-quote-form mb-50">
                                            <div className="request-title">
                                                <h2>Personal Info</h2>
                                                <p>Update your current personal information. </p>
                                            </div>
                                            <div className="row mb-10">
                                                <div className="col-12 col-md-12">
                                                    <FormField title={"Name"} type="text" className="form-control "
                                                               name="name" placeholder="Name"/>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <FormField title={"Phone"} type="tel" className="form-control "
                                                               name="phone" placeholder="Phone" />
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <FormField title={"Email"} type="email" className="form-control"
                                                               placeholder="Email" readOnly name="email"/>
                                                    <small className="d-block mb-10">* Your email cannot be changed
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12 col-md-12 col-lg-12">
                                                    <button type="submit" className="btn btn-primary btn-md">
                                                        {isSubmitting ? <Spinner/> :
                                                            'Update Personal Info'}'
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    )
                            }
                        />
                    </div>
                </div>

            </Layout>
        )
    }
}

export default connect(({Application, Auth, User}) => ({user: User}), {setUser})(ProfileScreen)
