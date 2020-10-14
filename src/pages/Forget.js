import React, {Component} from 'react';
import Layout from "../components/Layout";
import {isMobileOnly} from 'react-device-detect';
import {NavLink} from "react-router-dom";
import {FormField} from "../components/FormElements";
import {Formik} from "formik";
import {connect} from "react-redux";
import {forgetPassword, login} from "../store/modules/auth";


class Login extends Component {
    render() {
        return (
            <Layout noFooter={isMobileOnly} padded title="My Accounts" innerClass="request-quote  login-form">
                <div className="container pt-5 p-sm-0">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card">
                                <Formik
                                    initialValues={{email: ''}}
                                    onSubmit={(values, {setSubmitting}) => {
                                        this.props.forgetPassword(values,setSubmitting, this.props.history.replace);
                                    }}
                                >
                                    {({handleSubmit, handleChange, handleBlur, values, errors,}) => (
                                        <form onSubmit={handleSubmit} className="request-quote-form">
                                            <div className="request-title">
                                                <h2>Reset Password</h2>
                                            </div>

                                            <FormField type="email" placeholder="Email Address" name="email"/>


                                            <div className="form-group row mb-0">
                                                <div className="col-md-10 offset-md-1">
                                                    <button type="submit" className="btn btn__block btn__primary">
                                                        Send Password Reset Link
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

export default connect(null, {forgetPassword})( Login)
