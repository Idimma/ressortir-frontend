import React, {Component} from 'react';
import {isMobile} from 'react-device-detect';
import Layout from "../components/Layout";
import {Formik} from "formik";
import * as Yup from "yup";
import {DetailsForm, FormField, FormSelect} from "../components/FormElements";
import {connect} from "react-redux";
import {toast} from "react-toastify";
import {AppService} from "../services";
import * as SweetAlert from "sweetalert2";
import {catchError} from "../utils";

class Gas extends Component {
    state = {
        showProfile: false
    }
    goBack = () => {
        if (this.state.showProfile) {
            return this.setState({showProfile: false})
        }
        this.props.history.goBack();
    };

    render() {
        const {showProfile} = this.state;
        const {user} = this.props;
        return (
            <Layout onBack={this.goBack} noFooter={isMobile} padded={isMobile} title="Request Gas"
                    innerClass={`request-quote request-gas`}>
                <div className={`container  ${!isMobile && 'pt-110'} mb-5 pb-90`}>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
                            <Formik
                                initialValues={{
                                    delivery_address: '', payment_option: 'Pay Online',
                                    name:'', email:'', phone:'', service: 'gas', size:''
                                }}
                                enableReinitialize
                                validationSchema={
                                    Yup.object().shape({
                                        phone: Yup.string().min(9, 'Phone number is too short').required('Phone number is required'),
                                        delivery_address: Yup.string().required('Delivery address is required'),
                                        name: Yup.string().min(3, 'Name is too short').required('Name is required'),
                                        // size: Yup.string().required('Gas size is required'),
                                        email: Yup.string().email().required('Email is required'),
                                    })}
                                onSubmit={(values, actions) => {
                                    if (!values.name || !values.phone || !values.email) {
                                        return this.setState({showProfile: true})
                                    }

                                    if (!values.size) {
                                        this.setState({showProfile: false})
                                        return toast('Gas size is required');
                                    }

                                    if (values.payment_option === 'Pay Online') {
                                        const amount = {
                                            '12.5KG': 4500,
                                            '12.5KG + Cylinder': 15750,
                                            '20KG': 7000,
                                            '25KG': 8500,
                                            '50KG': 17000
                                        };

                                        const data = {
                                            email: values.email,
                                            phone: values.size,
                                            size: values.size,
                                            amount: Number(amount[values.size])
                                        };
                                        try {
                                            window.payWithPaystack(data, ({reference}) => {
                                                values.transaction_reference = reference;
                                                AppService.createOrder(values).then(() => {
                                                    SweetAlert.fire('Success', 'Order Created Successfully', 'success');
                                                    this.props.history.replace('/')
                                                }).catch(catchError).finally(() => {
                                                    actions.setSubmitting(false);
                                                });
                                            }, () => {
                                                actions.setSubmitting(false);
                                                catchError('Something went wrong during payment')
                                            });
                                        } catch (e) {
                                            SweetAlert.fire('Alert', 'Something went wrong during payment', 'warning');
                                            actions.setSubmitting(false);
                                        }
                                        return
                                    }

                                    AppService.createOrder(values).then(() => {
                                        SweetAlert.fire('Success', 'Order Created Successfully', 'success');
                                        this.props.history.replace('/')
                                    }).catch(catchError).finally(() => {
                                        actions.setSubmitting(false);
                                    });
                                }}
                            >
                                {({handleSubmit, handleChange, isSubmitting}) => (
                                    <form onSubmit={handleSubmit} className="request-quote-form">
                                        <DetailsForm
                                            addEmail
                                            hideProfile={!showProfile} service="gas"
                                            isLoading={isSubmitting}
                                            title={' Confirm Your Order'}
                                            onClick={() => document.getElementById('form-id').click()}
                                        />
                                        <div style={{display: !showProfile ? 'block' : 'none'}}>
                                            <div className="request-title mb-4">
                                                <h2>Complete your Order</h2>
                                            </div>
                                            <button hidden type="submit" id="form-id"/>
                                            <div className="row">
                                                <div
                                                    className="col-sm-12">
                                                    <h5 className="form__title">Gas Size </h5>
                                                </div>
                                            </div>
                                            <div className="row mb-10 radio-wrapper">
                                                <div
                                                    className="col-sm-12 col-md-3"
                                                    style={{zIndex: 10}}>
                                                    <div className="form-group gas-option-wrapper">
                                                        <input id="gas-12.5"
                                                               type="radio"
                                                               name="size"
                                                               onChange={handleChange}
                                                               value="12.5KG"
                                                               data-size="12.5KG"
                                                               data-amount="4500"
                                                               className="check-image"/>
                                                        <label
                                                            htmlFor="gas-12.5">
                                                            <img
                                                                src="/images/products/12v.png"
                                                                alt=""/>
                                                            <div
                                                                className="label-check_text-meta">12.5KG <span
                                                                className="price">₦4,500</span>
                                                            </div>
                                                        </label>
                                                        {/*<label*/}
                                                        {/*    htmlFor="gas-cylinder"*/}
                                                        {/*    className="label-check_text">*/}
                                                        {/*    <img*/}
                                                        {/*        src="/images/products/12v2.png"*/}
                                                        {/*        alt=""/>*/}
                                                        {/*    <input*/}
                                                        {/*        id="gas-cylinder"*/}
                                                        {/*        type="radio"*/}
                                                        {/*        name="size" onChange={handleChange}*/}
                                                        {/*        value="12.5KG + Cylinder"*/}
                                                        {/*        data-size="12.5KG+cylinder"*/}
                                                        {/*        data-amount="15750"*/}
                                                        {/*        className="check-image"/>*/}
                                                        {/*    <div className="label-check_text-meta">*/}
                                                        {/*        <span className="label-check_text-descr">Purchase 12.5kg Ressortir branded Gas Cylinder </span>*/}
                                                        {/*        <span className="price">₦15,750</span>*/}
                                                        {/*    </div>*/}
                                                        {/*</label>*/}
                                                    </div>
                                                </div>


                                                <div
                                                    className="col-sm-12 col-md-3">
                                                    <div
                                                        className="form-group gas-option-wrapper">
                                                        <input
                                                            id="gas-12kg"
                                                            type="radio"
                                                            name="size" onChange={handleChange}
                                                            value="12.5KG + Cylinder"
                                                            data-size="12.5KG+cylinder"
                                                            data-amount="15750"
                                                            className="check-image"
                                                        />
                                                        <label
                                                            htmlFor="gas-12kg">
                                                            <img
                                                                src="/images/products/12v2.png"
                                                                alt=""/>
                                                            <div className="label-check_text-meta text-center">
                                                                Purchase 12.5kg Ressortir branded Gas Cylinder
                                                            <span className="price">₦15,750</span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>




                                                <div
                                                    className="col-sm-12 col-md-3">
                                                    <div
                                                        className="form-group gas-option-wrapper">
                                                        <input id="gas-20"
                                                               type="radio"
                                                               name="size"
                                                               onChange={handleChange}
                                                               value="20KG"

                                                               className="check-image"
                                                               data-size="20KG"
                                                               data-amount="7000"/>
                                                        <label
                                                            htmlFor="gas-20">
                                                            <img
                                                                src="/images/products/20kg.png"
                                                                alt=""/>
                                                            <div
                                                                className="label-check_text-meta">20KG <span
                                                                className="price">₦7,000</span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div
                                                    className="col-sm-12 col-md-3">
                                                    <div
                                                        className="form-group gas-option-wrapper">
                                                        <input id="gas-25"
                                                               type="radio"
                                                               name="size"
                                                               onChange={handleChange}
                                                               value="25KG"
                                                               className="check-image"
                                                               data-size="25KG"
                                                               data-amount="8500"/>
                                                        <label
                                                            htmlFor="gas-25">
                                                            <img
                                                                src="/images/products/25kg.png"
                                                                alt=""/>
                                                            <div
                                                                className="label-check_text-meta">25KG <span
                                                                className="price">₦8,500</span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div
                                                    className="col-sm-12 col-md-3">
                                                    <div
                                                        className="form-group gas-option-wrapper">
                                                        <input id="gas-50"
                                                               type="radio"
                                                               name="size"
                                                               onChange={handleChange}
                                                               value="50KG"
                                                               className="check-image"
                                                               data-size="50KG"
                                                               data-amount="17000"/>
                                                        <label
                                                            htmlFor="gas-50">
                                                            <img
                                                                src="/images/products/50kg.png"
                                                                alt=""/>
                                                            <div
                                                                className="label-check_text-meta">50KG <span
                                                                className="price">₦17,000</span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div
                                                    className="col-sm-12">
                                                    <h5 className="form__title">Payment Option </h5>
                                                </div>
                                            </div>
                                            <div className="row mb-10 radio-wrapper">
                                                <div className="message col-12"></div>
                                                <div
                                                    className="col-sm-12 col-md-4 ">
                                                    <div
                                                        className="form-group payment-option-wrapper">
                                                        <label
                                                            htmlFor="payment-option-online"
                                                            className="label-check_text">
                                                            <input
                                                                id="payment-option-online"
                                                                type="radio"
                                                                name="payment_option"
                                                                value="Pay Online"
                                                                defaultChecked
                                                                onChange={handleChange}
                                                                className="check-text"/>
                                                            <div className="label-check_text-meta">
                                                                <span className="label-check_text-descr">
                                                                    Pay Online (Paystack)
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div
                                                    className="col-sm-12 col-md-4 ">
                                                    <div
                                                        className="form-group payment-option-wrapper">
                                                        <label
                                                            htmlFor="payment-option-pos"
                                                            className="label-check_text">
                                                            <input
                                                                id="payment-option-pos"
                                                                type="radio"
                                                                name="payment_option"
                                                                onChange={handleChange}
                                                                value="POS Machine on delivery"
                                                                className="check-text"/>
                                                            <div className="label-check_text-meta">
                                                                <span className="label-check_text-descr">
                                                                    Pay using POS Machine on delivery
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-4 ">
                                                    <div className="form-group payment-option-wrapper">
                                                        <label
                                                            htmlFor="payment-option-cash"
                                                            className="label-check_text">
                                                            <input
                                                                id="payment-option-cash"
                                                                type="radio"

                                                                name="payment_option"
                                                                onChange={handleChange}
                                                                value="Cash on delivery"
                                                                className="check-text"/>
                                                            <div className="label-check_text-meta">
                                                                <span className="label-check_text-descr">
                                                                    Pay cash on delivery
                                                                </span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-10">
                                                <div className="col-sm-12">
                                                    <h5 className="form__title mb-5">Delivery Location</h5>
                                                    <small className="d-block mb-10">* Deliveries are only available at
                                                        selected areas.
                                                    </small>
                                                </div>
                                                <div className="col-sm-6">
                                                    <FormSelect className="form-control " name="delivery_area">
                                                        <option value="">Select Area</option>
                                                        <option value="Agungi">Agungi</option>
                                                        {/*<option value="Alpha Beach">Alpha Beach</option>*/}
                                                        {/*<option value="Ajah">Ajah</option>*/}
                                                        {/*<option value="Abraham Adesanya">Abraham Adesanya</option>*/}
                                                        {/*<option value="Badore">Badore</option>*/}
                                                        <option value="Chevron">Chevron</option>
                                                        <option value="Chisco">Chisco</option>
                                                        {/*<option value="Eleganza">Eleganza</option>*/}
                                                        {/*<option value="Eleko">Eleko</option>*/}
                                                        {/*<option value="Igbo Efon">Igbo Efon</option>*/}
                                                        <option value="Ikate">Ikate</option>
                                                        {/*<option value="Ikota">Ikota</option>*/}
                                                        <option value="Jakande">Jakande</option>
                                                        <option value="Marwa">Marwa</option>
                                                        {/*<option value="Oniru">Oniru</option>*/}
                                                    </FormSelect>
                                                </div>
                                                <div className="col-sm-6">
                                                    <FormField type="text" name="delivery_address"
                                                               placeholder="Full Delivery Address"/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                                                    <button type="button"
                                                            onClick={() => this.setState({showProfile: true})}
                                                            className="btn btn__primary">
                                                        Request a Quote
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </Formik>

                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default connect(({Auth, User}) => ({user: User, auth: Auth}))(Gas)
