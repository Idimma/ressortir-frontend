import React, {Component} from 'react';
import Layout from "../../components/Layout";
import {isMobile} from 'react-device-detect';
import {Formik} from "formik";
import {DetailsForm, FormField} from "../../components/FormElements";


class DashDiesel extends Component {
    state = {
        showProfile: false
    }

    render() {
        const {showProfile} = this.state

        return (
            <Layout noFooter={isMobile} title="Request Freight">
                <div className=" col-12 col-md-10 dash-section__col">
                    <div className="dash-section__content">
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
                                    {showProfile ? <>
                                            <div className="row mb-10">
                                                <div className="col-sm-12 col-md-12 col-lg-12">
                                                    <div className="request-title">
                                                        <h2>Diesel Request Specification</h2>
                                                        <small className="d-block mt-10 mb-20">* Kindly note that the
                                                            Minimum Quantity of Diesel that can be requested
                                                            is <strong>2500Litres</strong></small>
                                                    </div>

                                                </div>
                                                <div className="col-sm-12 col-md-12 col-lg-12">
                                                    <FormField type="text" className="form-control " name="quantity"
                                                               placeholder="Diesel Quantity (min: 2000 litres)"/>
                                                </div>
                                            </div>
                                            <div className="row mb-10">
                                                <div className="col-sm-12 col-md-12 col-lg-12">
                                                    <div className="request-title mb-30">
                                                        <h2>Delivery Location</h2>
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-12 col-lg-12">
                                                    <FormField type="text" className="form-control " name="delivery_address"
                                                               placeholder="Full Delivery Address"/>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                                                    <button type="submit" className="btn btn__primary">Continue Request
                                                    </button>
                                                </div>
                                            </div>
                                        </> :
                                        <DetailsForm service="diesel"/>
                                    }
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>

            </Layout>
        )
    }
}

export default DashDiesel
