import React, {Component} from 'react';
import Layout from "../components/Layout";


class Login extends Component {
    render() {
        return (
            <Layout>
                <section id="requestQuote" class="request-quote request-lpg pt-110 pb-90">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
                                <form   class="request-quote-form">

                                    <div class="request-title">
                                        <h2>Request LPG Tank Refill</h2>
                                        <p>Kindly fill out the form below.</p>
                                    </div>

                                    <div class="row mb-10">
                                        <div class="col-12">
                                            <h5 class="form__title">Personal / Company Data</h5>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <input type="text"
                                                       class="form-control @error('name') is-invalid @enderror"
                                                       name="name" placeholder="Full Name"
                                                       value="{{ old('name') }}"/>
                                                <span
                                                    class="invalid-feedback"> <strong>  </strong> </span>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <input type="email"
                                                       class="form-control @error('email') is-invalid @enderror"
                                                       name="email" placeholder="Email Address"
                                                       value="{{ old('email') }}"/>
                                                    <span
                                                        class="invalid-feedback"> <strong> </strong> </span>
                                            </div>
                                        </div>
                                        {/* /.col-lg-4 */}
                                        <div class="col-12">
                                            <div class="form-group">
                                                <input type="tel"
                                                       class="form-control @error('phone') is-invalid @enderror"
                                                       name="phone" placeholder="Phone Number"
                                                       value="{{ old('phone') }}"/>
                                                    @error('phone')
                                                    <span
                                                        class="invalid-feedback"> <strong> {{$message}} </strong> </span>
                                                    @enderror
                                            </div>
                                        </div>
                                        {/* /.col-lg-4 */}
                                    </div>
                                    {/* /.row */}
                                    <div class="row mb-10">
                                        <div class="col-sm-12 col-md-12 col-lg-12">
                                            <h5 class="form__title">Order Specification </h5>

                                        </div>
                                        {/* /.col-lg-12 */}
                                        <div class="col-sm-12 col-md-12 col-lg-12">
                                            <div class="form-group  form-group-select">
                                                <select class="form-control @error('quantity') is-invalid @enderror"
                                                        name="quantity" id="quantity">
                                                    <option value="">Select Quantity</option>
                                                    <option value="2.0 tons">2.0 tons</option>
                                                    <option value="2.5 tons">2.5 tons</option>
                                                    <option value="5 tons">5 tons</option>
                                                    <option value="10 tons">10 tons</option>
                                                </select>

                                                @error('quantity')
                                                <span
                                                    class="invalid-feedback"> <strong> {{$message}} </strong> </span>
                                                @enderror
                                            </div>
                                        </div>
                                        {/* /.col-lg-4 */}
                                        <div class="col-sm-12 col-md-12 col-lg-12">

                                        </div>
                                        {/* /.col-lg-12 */}
                                    </div>
                                    {/* /.row */}
                                    <div class="row mb-10">
                                        <div class="col-sm-12 col-md-12 col-lg-12">
                                            <h5 class="form__title">Delivery Location</h5>

                                        </div>
                                        {/* /.col-lg-12 */}
                                        <div class="col-sm-12 col-md-12 col-lg-12">
                                            <div class="form-group">
                                                <input type="text"
                                                       class="form-control @error('delivery_address') is-invalid @enderror"
                                                       name="delivery_address" placeholder="Full Delivery Address"
                                                       value="{{ old('delivery_address') }}"/>
                                                    @error('delivery_address')
                                                    <span
                                                        class="invalid-feedback"> <strong> {{$message}} </strong> </span>
                                                    @enderror
                                            </div>
                                        </div>
                                        {/* /.col-lg-4 */}
                                    </div>
                                    {/* /.row */}
                                    <div class="row">
                                        <div class="col-sm-12 col-md-12 col-lg-12 text-center">
                                            <button type="submit" class="btn btn__primary">Request A Quote</button>
                                        </div>
                                        {/* /.col-lg-12 */}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="services" class="services pt-3">
                    <div class="container">

                        <div class="row text-center justify-content-center">


                            <div class="col-sm-6 col-md-4 ">
                                <div class="service-item service-item-3">
                                    <div class="service__icon">
                                        <i class="service__icon-gas"></i>
                                        <h4 class="service__title">Domestic Gas Refill </h4>
                                    </div>
                                    <div class="service__content">
                                        <a href="{{ route('home.gas') }}" class="btn btn__white">
                                            <span>Request</span>
                                        </a>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>
            </Layout>
    )
    }
    }

    export default Login
