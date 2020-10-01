import React, { Component } from 'react';
import Layout from "../components/Layout";
import { isMobile } from 'react-device-detect';
import {Formik} from "formik";


class Freight extends Component {
    render() {
        return (
            <Layout noFooter={isMobile}  title="Diesel Supply">
            <section id="requestQuote" className="request-quote request-diesel pt-110 mb-5 pb-90">
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
                                    <input type="hidden" name="service" value="freight" />
                                    <div className="request-title">
                                        <h1>Request Freight</h1>
                                        <p>Kindly fill out the form below.</p>
                                    </div>

                                    <div className="row mb-10">
                                        <div className="col-12">
                                            <h5 className="form__title">Personal / Company Data</h5>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input type="text"
                                                    className="form-control @error('name') is-invalid @enderror"
                                                    name="name" placeholder="Full Name" />
                                                <span
                                                    className="invalid-feedback"> <strong> </strong> </span>
                                            </div>
                                        </div>
                                        {/* /.col-lg-4 */}
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input type="email"
                                                    className="form-control @error('email') is-invalid @enderror"
                                                    name="email" placeholder="Email Address"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input type="tel"
                                                    className="form-control @error('phone') is-invalid @enderror"
                                                    name="phone" placeholder="Phone Number"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* /.row */}
                                    <div className="row mb-10">
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <h5 className="form__title mb-5">Order Specification </h5>
                                            <small className="d-block mb-10">* Kindly note that the Minimum Size of
                                                    goods is between <strong>9-10 tons</strong> per truck load
                                                </small>


                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <div className="form-group">
                                                <input type="text"
                                                    className="form-control"
                                                    name="goods_type" placeholder="Type of Goods" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-6">
                                            <div className="form-group">
                                                <input type="text"
                                                    className="form-control "
                                                    name="goods_size" placeholder="Size of Goods" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-10">
                                        <div className="col-sm-12 col-md-12 col-lg-12">
                                            <h5 className="form__title">Pick up and Delivery Location</h5>

                                        </div>
                                        <div className="col-sm-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text"
                                                    className="form-control "
                                                    name="pickup_address" placeholder="Full Pick up Address" />

                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-12">
                                            <div className="form-group">
                                                <input type="text"
                                                    className="form-control "
                                                    name="delivery_address" placeholder="Full Delivery Address" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                                            <button type="submit" className="btn btn__primary">Request A Quote
                                                </button>
                                        </div>
                                    </div>
                                        </form>)}</Formik>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        )
    }
}

export default Freight
