import React, {Component} from 'react';
import Layout from "../components/Layout";
import {isMobile} from 'react-device-detect';
import {Formik} from "formik";
import {FormField} from "../components/FormElements";


class Dashboard extends Component {
    render() {
        return (
            <Layout noFooter={isMobile} title="Profile" innerClass="">


                <div className=" col-12 col-md-10 dash-section__col">
                    <div className="dash-section__content">

                        <Formik
                            initialValues={{name: 'jared'}}
                            onSubmit={(values, actions) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    actions.setSubmitting(false);
                                }, 1000);
                            }}
                        >
                            {({handleSubmit, handleChange, handleBlur, values, errors,}) => (
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
                                            <FormField title="Old Password" id="password" type="password"
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
                                            <button type="submit" className="btn btn-primary btn-md">Update Password
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </Formik>

                        <Formik
                            initialValues={{name: 'jared'}}
                            onSubmit={(values, actions) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    actions.setSubmitting(false);
                                }, 1000);
                            }}
                            component={
                                ({handleSubmit, handleChange, handleBlur, values, errors,}) =>
                                    (
                                        <form onSubmit={handleSubmit} className="request-quote-form mb-50">
                                            <div className="request-title">
                                                <h2>Personal Info</h2>
                                                <p>Update your current personal information. </p>
                                            </div>
                                            <div className="row mb-10">
                                                <div className="col-12 col-md-12">
                                                    <FormField title={"Name"} type="text" className="form-control "
                                                               name="name"
                                                               placeholder="Name"
                                                               value="Test Account"/>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <FormField title={"Phone"} type="tel" className="form-control "
                                                               name="phone"
                                                               placeholder="Phone"
                                                               value="08133691990"/>
                                                </div>
                                                <div className="col-12 col-md-6">
                                                    <FormField title={"Email"} type="email" className="form-control"
                                                               placeholder="Email"
                                                               value="gidicodes@gmail.com" readOnly=""/>
                                                    <small className="d-block mb-10">* Your email cannot be changed
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12 col-md-12 col-lg-12">
                                                    <button type="submit" className="btn btn-primary btn-md">Update
                                                        Personal
                                                        Info
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

export default Dashboard
