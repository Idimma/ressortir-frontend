import React, {Component} from 'react';
import Layout from "../components/Layout";


class Login extends Component {
    render() {
        return (
            <Layout>
                <section id="requestQuote" className="request-quote  login-form">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <div className="card">
                                    <form method="POST" className="request-quote-form"
                                          action="https://ressortir.com/login">
                                        <div className="request-title">
                                            <h2>Login</h2>
                                        </div>

                                        <div className="form-group row">
                                            {/* <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label> */}

                                            <div className="col-md-10 mx-auto">
                                                <input id="email" type="email" placeholder="Email Address"
                                                       className="form-control " name="email" value="" required=""
                                                       autoComplete="email" autoFocus/>

                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            {/* <label for="password" class="col-md-4 col-form-label text-md-right">Password</label> */}

                                            <div className="col-md-10 mx-auto">
                                                <input id="password" type="password" placeholder="Password"
                                                       className="form-control " name="password" required=""
                                                       autoComplete="current-password"/>

                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-5 col-md-4 offset-md-1">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" name="remember"
                                                           id="remember"/>

                                                    <label className="form-check-label" htmlFor="remember">
                                                        Remember Me
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-7 col-md-6">

                                                <a className="btn btn-link" href="https://ressortir.com/password/reset">
                                                    Forgot Your Password?
                                                </a>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}

export default Login
