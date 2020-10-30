import React, {Component} from 'react';
import {isMobile} from 'react-device-detect';
import Layout from "../components/Layout";
import {Formik} from "formik";
import {Spinner} from "reactstrap";
import * as Yup from "yup";
import {AppService} from "../services";
import {catchError} from "../utils";
import {FormField, FormSelect} from "../components/FormElements";
import * as SweetAlert from "sweetalert2";

class LpgPage extends Component {
    render() {
        return (
            <Layout noFooter={isMobile} padded={isMobile}
                    innerClass={`request-quote request-lpg`} title="LPG Tank Refill">
                <div className={`container  ${!isMobile && 'pt-110'} mb-5 pb-90`}>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
                            <Formik
                                initialValues={{name: '', service: 'lpg'}}
                                validationSchema={Yup.object().shape({
                                    phone: Yup.string().min(9, 'Phone number is too short').required('Phone number is required'),
                                    delivery_address: Yup.string().required('Delivery address is required'),
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
                                {({handleSubmit, isSubmitting}) => (
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
                                                <FormField type="text" name="name" placeholder="Full Name"/>
                                            </div>
                                            <div className="col-12">
                                                <FormField type="email" name="email" required
                                                           placeholder="Email Address"/>
                                            </div>
                                            <div className="col-12">
                                                <FormField type="tel" name="phone" placeholder="Phone Number"/>
                                            </div>
                                        </div>
                                        <div className="row mb-10">
                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                                <h5 className="form__title">Order Specification </h5>

                                            </div>
                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                                <FormSelect className="form-control " name="quantity" id="quantity">
                                                    <option>Select Quantity</option>
                                                    <option value="2.0 tons">2.0 tons</option>
                                                    <option value="2.5 tons">2.5 tons</option>
                                                    <option value="5 tons">5 tons</option>
                                                    <option value="10 tons">10 tons</option>
                                                </FormSelect>
                                            </div>
                                            <div className="col-sm-12 col-md-12 col-lg-12">

                                            </div>
                                        </div>
                                        <div className="row mb-10">
                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                                <h5 className="form__title">Delivery Location</h5>

                                            </div>
                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                                <FormField type="text" name="delivery_address"
                                                           placeholder="Full Delivery Address"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                                                <button type="submit" className="btn btn__primary">
                                                    {isSubmitting ? <Spinner/> : 'Request A Quote'}
                                                </button>
                                            </div>
                                        </div>
                                    </form>)}
                            </Formik>
                        </div>
                    </div>
                </div>

                <section className="mb-5 pb-5 pb-sm-0 mb-sm-0">
                    {/*<div className="container">*/}
                    {/*    <div className="row text-center justify-content-center">*/}
                    {/*        {isMobile ?*/}
                    {/*            <div className="col-sm-6 col-md-4">*/}
                    {/*                <div className="request-item bg-white ">*/}
                    {/*                    <div className="aligned mr-auto">*/}
                    {/*                        <img src={gas} alt="Gas"/>*/}
                    {/*                        <h1 className="fs-18">Domestic Gas Refill</h1>*/}
                    {/*                    </div>*/}
                    {/*                    <NavLink to="/gas"*/}
                    {/*                             className="btn btn-danger btn-round ml-auto"*/}
                    {/*                             title="Domestic Gas Refill">*/}
                    {/*                        <span>Request</span>*/}
                    {/*                    </NavLink>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            :*/}
                    {/*            <div className="col-sm-6 col-md-4 ">*/}
                    {/*                <div className="service-item service-item-3">*/}
                    {/*                    <div className="service__icon">*/}
                    {/*                        <i className="service__icon-gas"></i>*/}
                    {/*                        <h4 className="service__title">Domestic Gas Refill </h4>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="service__content">*/}
                    {/*                        <a href="https://ressortir.com/gas" className="btn btn__white">*/}
                    {/*                            <span>Request</span>*/}
                    {/*                        </a>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        }*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </section>
            </Layout>
        )
    }
}

export default LpgPage
