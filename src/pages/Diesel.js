import React, {Component} from 'react';
import Layout from "../components/Layout";
import {isMobile} from 'react-device-detect';
import {Formik} from "formik";
import * as Yup from "yup";
import {AppService} from "../services";
import {toast} from "react-toastify";
import {catchError} from "../utils";
import {Spinner} from "reactstrap";


class Diesel extends Component {
    render() {
        return (
            <Layout noFooter={isMobile} padded={isMobile} title="Diesel Supply"
                    innerClass="request-quote request-diesel">
                <div className="container pb-90 mb-5">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
                            <Formik
                                validationSchema={Yup.object().shape({
                                    phone: Yup.string().min(9, 'Phone number is too short').required('Phone number is required'),
                                    delivery_address: Yup.string().required('Email is required'),
                                    quantity: Yup.string().required('Email is required'),
                                    name: Yup.string().min(3, 'Name is too short').required('Name is required'),
                                })}
                                enableReinitialize
                                onSubmit={(values, actions) => {
                                    AppService.createOrder(values).then(() => {
                                        toast.success('Order Created Successfully');
                                        this.props.history.replace('/')
                                    }).catch(catchError).finally(() => {
                                        actions.setSubmitting(false);
                                    });
                                }}
                            >
                                {({handleSubmit, isSubmitting,}) => (
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
                                                        className="btn btn-danger btn-round btn-md">
                                                    {isSubmitting ? <Spinner/> : 'Request A Quote'}
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
