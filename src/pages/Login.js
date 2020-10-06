import React, {Component} from 'react';
import Layout from "../components/Layout";
import {isMobileOnly} from 'react-device-detect';
import {NavLink} from "react-router-dom";
import {FormField} from "../components/FormElements";
import {Formik} from "formik";
import {connect} from "react-redux";
import {login} from "../store/modules/auth";


class Login extends Component {
    render() {
        return (
            <Layout noFooter={isMobileOnly} padded title="My Accounts" innerClass="request-quote  login-form">
                <div className="container pt-5 p-sm-0">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="card">
                                <Formik
                                    initialValues={{}}
                                    onSubmit={(values, {setSubmitting}) => {
                                        this.props.login(values,setSubmitting, this.props.history.replace);
                                    }}
                                >
                                    {({handleSubmit, handleChange, handleBlur, values, errors,}) => (
                                        <form onSubmit={handleSubmit} className="request-quote-form">
                                            <div className="request-title">
                                                <h2>Login</h2>
                                            </div>

                                            <FormField type="email" placeholder="Email Address" name="email"/>
                                            <FormField type="password" placeholder="Password" name="password"/>


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

export default connect(null, {login})( Login)
