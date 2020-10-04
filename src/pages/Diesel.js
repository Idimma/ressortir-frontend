import React, {Component} from 'react';
import Layout from "../components/Layout";
import {isMobile} from 'react-device-detect';
import {Formik} from "formik";


class Diesel extends Component {
    render() {
        return (
            <Layout noFooter={isMobile} padded={isMobile} title="Diesel Supply"
                    innerClass="request-quote request-diesel">
                <div className="container pb-90 mb-5">
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
                                            <h1>Request Diesel Supply</h1>
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
                                                <h5 className="form__title mb-5">Order Specification </h5>
                                                <p className=" d-block mb-10">* Kindly note that the Minimum Quantity of
                                                    Diesel that can be requested is <strong>2500Litres</strong></p>

                                            </div>
                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control " name="quantity"
                                                           placeholder="Diesel Quantity (min: 2000 litres)"/>
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
                                                    <input type="text" className="form-control " name="delivery_address"
                                                           placeholder="Full Delivery Address"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                                                <button type="submit"
                                                        className="btn btn-danger btn-round btn-md">Request A Quote
                                                </button>
                                            </div>
                                        </div>
                                    </form>)}</Formik>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Diesel
