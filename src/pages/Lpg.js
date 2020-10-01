import React, {Component} from 'react';
import {isMobile} from 'react-device-detect';
import Layout from "../components/Layout";
import gas from '../assets/images/icons/gas.png';
import {NavLink} from "react-router-dom";
import {Formik} from "formik";

class Login extends Component {
    render() {
        return (
            <Layout noFooter={isMobile} title="LPG Tank Refill">
                <section id="requestQuote" className="request-quote request-diesel">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
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
                                                <h2>Request LPG Tank Refill</h2>
                                                <p>Kindly fill out the form below.</p>
                                            </div>
                                            <div className="row mb-10">
                                                <div className="col-12">
                                                    <h5 className="form__title">Personal / Company Data</h5>

                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control " name="name"
                                                               placeholder="Full Name" value=""/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <input type="email" className="form-control " name="email"
                                                               placeholder="Email Address" value=""/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <input type="tel" className="form-control " name="phone"
                                                               placeholder="Phone Number" value=""/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-10">
                                                <div className="col-sm-12 col-md-12 col-lg-12">
                                                    <h5 className="form__title">Order Specification </h5>

                                                </div>
                                                <div className="col-sm-12 col-md-12 col-lg-12">
                                                    <div className="form-group  form-group-select">
                                                        <select className="form-control " name="quantity" id="quantity">
                                                            <option value="">Select Quantity</option>
                                                            <option value="2.0 tons">2.0 tons</option>
                                                            <option value="2.5 tons">2.5 tons</option>
                                                            <option value="5 tons">5 tons</option>
                                                            <option value="10 tons">10 tons</option>
                                                        </select>

                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-12 col-lg-12">

                                                </div>
                                            </div>
                                            <div className="row mb-10">
                                                <div className="col-sm-12 col-md-12 col-lg-12">
                                                    <h5 className="form__title">Delivery Location</h5>

                                                </div>
                                                <div className="col-sm-12 col-md-12 col-lg-12">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control "
                                                               name="delivery_address"
                                                               placeholder="Full Delivery Address" value=""/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                                                    <button type="submit" className="btn btn__primary">Request A Quote
                                                    </button>
                                                </div>
                                            </div>
                                        </form>)}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mb-5 pb-5 pb-sm-0 mb-sm-0">
                    <div className="container">
                        <div className="row text-center justify-content-center">
                            {isMobile ?
                                <div className="col-sm-6 col-md-4">
                                    <div className="request-item ">
                                        <div className="aligned mr-auto">
                                            <img src={gas} alt="Gas"/>
                                            <h1 className="fs-18">Domestic Gas Refill</h1>
                                        </div>
                                        <NavLink to="/gas"
                                                 className="btn btn-danger btn-round ml-auto"
                                                 title="Domestic Gas Refill">
                                            <span>Request</span>
                                        </NavLink>
                                    </div>
                                </div>
                                :
                                <div className="col-sm-6 col-md-4 ">
                                    <div className="service-item service-item-3">
                                        <div className="service__icon">
                                            <i className="service__icon-gas"></i>
                                            <h4 className="service__title">Domestic Gas Refill </h4>
                                        </div>
                                        <div className="service__content">
                                            <a href="https://ressortir.com/gas" className="btn btn__white">
                                                <span>Request</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}

export default Login
