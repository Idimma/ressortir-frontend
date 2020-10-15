import React, {Component} from 'react';
import Layout from "../components/Layout";
import {isMobileOnly} from 'react-device-detect';
import {FormField} from "../components/FormElements";
import {Formik} from "formik";
import {connect} from "react-redux";
import {login} from "../store/modules/auth";
import {Spinner} from "reactstrap";
import {AuthService} from "../services";
import {catchError} from "../utils";
import * as SweetAlert from 'sweetalert2';


class Reset extends Component {
    componentDidMount() {
        // const {email, token} = this.props.match.params
        // AuthService.verifyToken(token).then(res => {
        //     console.log(res)
        // }).catch(e => {
        //     console.log(e)
        // });

    }

    render() {
        const {email, token} = this.props.match.params

        return (
            <Layout noFooter={isMobileOnly} padded title="My Accounts" innerClass="request-quote  login-form">
                <div className="container pt-5 p-sm-0">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card">
                                <Formik
                                    initialValues={{email, token}}
                                    onSubmit={(values, {setSubmitting}) => {
                                        // this.props.login(values, setSubmitting, this.props.history.replace);
                                        AuthService.resetPassword(values).then(res => {
                                            SweetAlert.fire('Success', 'Password reset was successful', 'success')
                                                .then(() => {
                                                this.props.history.replace('/login')
                                            });
                                        }).catch(e => {
                                            catchError(e);
                                        }).finally(() => {
                                            setSubmitting(false);
                                        })
                                    }}
                                >
                                    {({handleSubmit, isSubmitting}) => (
                                        <form onSubmit={handleSubmit} className="request-quote-form">
                                            <div className="request-title">
                                                <h2>Reset Password</h2>
                                            </div>

                                            <FormField type="email" disabled name="email"/>
                                            <FormField type="password" placeholder="Password" name="password"/>
                                            <FormField type="password" placeholder="Confirm Password"
                                                       name="password_confirmation"/>


                                            <div className="form-group row mb-0">
                                                <div className="col-md-10 offset-md-1">
                                                    <button type="submit" className="btn btn__block btn__primary">
                                                        {isSubmitting ? <Spinner/> : 'Reset Password'}
                                                    </button>

                                                </div>
                                            </div>
                                        </form>
                                    )
                                    }
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default connect(null, {login})(Reset)
