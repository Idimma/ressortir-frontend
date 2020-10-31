import React, {Component} from 'react';
import Layout from "../components/Layout";
import {isMobile} from 'react-device-detect';
import {Formik} from "formik";
import * as Yup from "yup";
import {AppService} from "../services";
import {catchError} from "../utils";
import {Spinner} from "reactstrap";
import {FormField} from "../components/FormElements";
import * as SweetAlert from "sweetalert2";


class Diesel extends Component {
    render() {
        return (
            <Layout noFooter={isMobile} padded={isMobile} title="Diesel Supply"
                    innerClass="request-quote request-diesel">
                <div className="container pb-90 mb-5">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
                            <Formik
                                initialValues={{
                                    name: '',
                                    phone: '',
                                    quantity: '',
                                    delivery_address: '',
                                    service: 'diesel'
                                }}
                                validationSchema={Yup.object().shape({
                                    phone: Yup.string().min(9, 'Phone number is too short').required('Phone number is required'),
                                    delivery_address: Yup.string().required('Delivery Address is required'),
                                    quantity: Yup.string().required('Quantity is required'),
                                    name: Yup.string().min(3, 'Name is too short').required('Name is required'),
                                })}
                                onSubmit={(values, actions) => {
                                    AppService.createOrder(values).then(() => {
                                        SweetAlert.fire('Success', 'Order Created Successfully', 'success');
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
                                                <FormField type="text" name="name" placeholder="Full Name"/>
                                            </div>
                                            <div className="col-12">
                                                <FormField type="email" name="email" placeholder="Email Address"/>
                                            </div>
                                            <div className="col-12">
                                                <FormField type="tel" name="phone" placeholder="Phone Number"/>
                                            </div>
                                        </div>
                                        <div className="row mb-10">
                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                                <h5 className="form__title mb-5">Order Specification </h5>
                                                <p className=" d-block mb-10">* Kindly note that the Minimum Quantity of
                                                    Diesel that can be requested is <strong>1000 Litres</strong></p>

                                            </div>
                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                                <div className="form-group">
                                                    <FormField type="text" name="quantity"
                                                               placeholder="Diesel Quantity (min: 1000 litres)"/>
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
                                                    <FormField type="text" name="delivery_address"
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
                                    </form>)}
                            </Formik>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Diesel
