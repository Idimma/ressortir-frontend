import React, {Component} from 'react';
import Layout from "../components/Layout";

import {isMobile} from 'react-device-detect';
import {NavLink} from "react-router-dom";
import {FormField} from "../components/FormElements";
import {Formik} from "formik";


class Login extends Component {
    render() {
        return (
            <Layout noFooter={isMobile} title="Profile" innerClass="request-quote  login-form">
                <div className="container pt-5 p-sm-0">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card">
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
                                        <form onSubmit={handleSubmit} className="request-quote-form">
                                            <div className="request-title">
                                                <h2>Login</h2>
                                            </div>

                                            <div className="form-group row">
                                                {/* <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label> */}

                                                <div className="col-md-10 mx-auto">
                                                    <FormField id="email" type="email" placeholder="Email Address"
                                                               className="form-control " name="email" value=""
                                                               required=""
                                                               autoComplete="email" autoFocus/>

                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                {/* <label for="password" class="col-md-4 col-form-label text-md-right">Password</label> */}

                                                <div className="col-md-10 mx-auto">
                                                    <FormField id="password" type="password" placeholder="Password"
                                                               className="form-control " name="password" required=""
                                                               autoComplete="current-password"/>

                                                </div>
                                            </div>

                                            <div className="form-group row">
                                                <div className="col-5 col-md-4 offset-md-1">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox"
                                                               name="remember"
                                                               id="remember"/>

                                                        <label className="form-check-label" htmlFor="remember">
                                                            Remember Me
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-7 col-md-6">

                                                    <NavLink className="btn btn-link" to="/password/reset">
                                                        Forgot Your Password?
                                                    </NavLink>
                                                </div>
                                            </div>

                                            <div className="form-group row mb-0">
                                                <div className="col-md-10 offset-md-1">
                                                    <button type="submit" className="btn btn__block btn__primary">
                                                        Login
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

export default Login
