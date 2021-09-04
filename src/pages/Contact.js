import * as Yup from "yup";

import { FormField, FormText } from "../components/FormElements";
import React, { Component } from 'react';

import { Formik } from "formik";
import Layout from "../components/Layout";
import { Spinner } from "reactstrap";
import { isMobile } from 'react-device-detect';
import { toast } from 'react-toastify';

class Contact extends Component {
    render() {
        return (
            <Layout title="Contact Us">
                <div className={`container  ${!isMobile && 'pt-110'} mb-5 pb-90`}>
                    <div className="row">
                        <div className="col-sm-7 mx-auto">
                            <div className="card  p-5">
                                <Formik
                                    initialValues={{
                                        subject: '', text: '', email: '',
                                    }}
                                    validationSchema={Yup.object().shape({
                                        email: Yup.string().email().required('Email is required'),
                                        text: Yup.string().required('Message Content required'),
                                        subject: Yup.string().required('Subject required'),
                                    })}
                                    onSubmit={(values, actions) => {
                                        setTimeout(() => {
                                            toast('Message sent ');
                                            actions.setSubmitting(false);

                                        }, 3000);
                                    }}
                                >
                                    {({ handleSubmit, isSubmitting }) => (
                                        <form onSubmit={handleSubmit} className="request-quote-form">
                                            <div className="text-center">
                                                <h1>Contact Us</h1>
                                                <p>Kindly fill out the form below.</p>
                                            </div>

                                            <div className="row mb-10">

                                                <div className="col-12">
                                                    <FormField type="text" name="subject" placeholder="Subject" />
                                                </div>
                                                {/* /.col-lg-4 */}
                                                <div className="col-12">
                                                    <FormField type="email" name="email" placeholder="Email Address" />
                                                </div>
                                                <div className="col-12">
                                                    <FormText rows={5} name="text" placeholder="Message" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                                                    <button type="submit" className="btn btn-round b btn__primary">
                                                        {isSubmitting ? <Spinner /> : 'Send Message'}
                                                    </button>
                                                </div>
                                            </div>
                                        </form>)}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default Contact
