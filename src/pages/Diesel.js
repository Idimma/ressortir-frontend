import React, { Component } from 'react';
import Layout from "../components/Layout";
import { isMobile } from 'react-device-detect';


class Diesel extends Component {
    render() {
        return (
            <Layout noFooter={isMobile}  title="Diesel Supply">
                <section id="requestQuote" class="request-quote request-diesel pt-110 mb-5 pb-90">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
                                <form method="POST" class="request-quote-form">
                                    <div class="request-title">
                                        <h1>Request Diesel Supply</h1>
                                        <p>Kindly fill out the form below.</p>
                                    </div>
                                    <div class="row mb-10">
                                        <div class="col-12">
                                            <h5 class="form__title">Personal / Company Data</h5>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control " name="name" placeholder="Full Name" value="" />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <input type="email" class="form-control " name="email" placeholder="Email Address" value="" />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <input type="tel" class="form-control " name="phone" placeholder="Phone Number" value="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row mb-10">
                                        <div class="col-sm-12 col-md-12 col-lg-12">
                                            <h5 class="form__title mb-5">Order Specification </h5>
                                            <p class=" d-block mb-10">* Kindly note that the Minimum Quantity of Diesel that can be requested is <strong>2500Litres</strong></p>

                                        </div>
                                        <div class="col-sm-12 col-md-12 col-lg-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control " name="quantity" placeholder="Diesel Quantity (min: 2000 litres)" />
                                            </div>
                                        </div>
                                        <div class="col-sm-12 col-md-12 col-lg-12">

                                        </div>
                                    </div>
                                    <div class="row mb-10">
                                        <div class="col-sm-12 col-md-12 col-lg-12">
                                            <h5 class="form__title">Delivery Location</h5>

                                        </div>
                                        <div class="col-sm-12 col-md-12 col-lg-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control " name="delivery_address" placeholder="Full Delivery Address" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12 col-md-12 col-lg-12 text-center">
                                            <button type="submit" class="btn btn-danger btn-round btn-md">Request A Quote</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        )
    }
}

export default Diesel
