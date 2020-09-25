import React, {Component} from 'react';
import Layout from "../components/Layout";


class Diesel extends Component {
    render() {
        return (
            <Layout>
                <section id="requestQuote" className="request-quote request-diesel pt-110 pb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
                                <form action="{{ route('order') }}" method="POST" className="request-quote-form">
                                    @csrf
                                    <input type="hidden" name="service" value="diesel">
                                        <div className="request-title">
                                            <h1>Request Diesel Supply</h1>
                                            <p>Kindly fill out the form below.</p>
                                        </div>
                                        {/* /.row */}
                                        <div className="row mb-10">
                                            <div className="col-12">
                                                <h5 className="form__title">Personal / Company Data</h5>

                                            </div>
                                            {/* /.col-lg-12 */}
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="text"
                                                           className="form-control @error('name') is-invalid @enderror"
                                                           name="name" placeholder="Full Name"
                                                           value="{{ old('name') }}">
                                                        @error('name')
                                                        <span
                                                            className="invalid-feedback"> <strong> {{$message}} </strong> </span>
                                                        @enderror
                                                </div>
                                            </div>
                                            {/* /.col-lg-4 */}
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="email"
                                                           className="form-control @error('email') is-invalid @enderror"
                                                           name="email" placeholder="Email Address"
                                                           value="{{ old('email') }}">
                                                        @error('email')
                                                        <span
                                                            className="invalid-feedback"> <strong> {{$message}} </strong> </span>
                                                        @enderror
                                                </div>
                                            </div>
                                            {/* /.col-lg-4 */}
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="tel"
                                                           className="form-control @error('phone') is-invalid @enderror"
                                                           name="phone" placeholder="Phone Number"
                                                           value="{{ old('phone') }}">
                                                        @error('phone')
                                                        <span
                                                            className="invalid-feedback"> <strong> {{$message}} </strong> </span>
                                                        @enderror
                                                </div>
                                            </div>
                                            {/* /.col-lg-4 */}
                                        </div>
                                        {/* /.row */}
                                        <div className="row mb-10">
                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                                <h5 className="form__title mb-5">Order Specification </h5>
                                                <p className=" d-block mb-10">* Kindly note that the Minimum Quantity of
                                                    Diesel that can be requested is <strong>2500Litres</strong></p>

                                            </div>
                                            {/* /.col-lg-12 */}
                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                                <div className="form-group">
                                                    <input type="text"
                                                           className="form-control @error('quantity') is-invalid @enderror"
                                                           name="quantity"
                                                           placeholder="Diesel Quantity (min: 2000 litres)"
                                                           value="{{ old('quantity') }}">
                                                        @error('quantity')
                                                        <span
                                                            className="invalid-feedback"> <strong> {{$message}} </strong> </span>
                                                        @enderror
                                                </div>
                                            </div>
                                            {/* /.col-lg-4 */}
                                            <div className="col-sm-12 col-md-12 col-lg-12">

                                            </div>
                                            {/* /.col-lg-12 */}
                                        </div>
                                        {/* /.row */}
                                        <div className="row mb-10">
                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                                <h5 className="form__title">Delivery Location</h5>

                                            </div>
                                            {/* /.col-lg-12 */}
                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                                <div className="form-group">
                                                    <input type="text"
                                                           className="form-control @error('delivery_address') is-invalid @enderror"
                                                           name="delivery_address" placeholder="Full Delivery Address"
                                                           value="{{ old('delivery_address') }}">
                                                        @error('delivery_address')
                                                        <span
                                                            className="invalid-feedback"> <strong> {{$message}} </strong> </span>
                                                        @enderror
                                                </div>
                                            </div>
                                            {/* /.col-lg-4 */}
                                        </div>
                                        {/* /.row */}
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                                                <button type="submit" className="btn btn__primary">Request A Quote
                                                </button>
                                            </div>
                                            {/* /.col-lg-12 */}
                                        </div>
                                    {/* /.row */}
                                </form>
                            </div>
                            {/* /.col-lg-8 */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container */}
                </section>
            </Layout>
        )
    }
}

export default Diesel
