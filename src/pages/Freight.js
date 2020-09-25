import React, {Component} from 'react';
import Layout from "../components/Layout";


class Freight extends Component {
    render() {
        return (
            <Layout>
                <section id="requestQuote" className="request-quote request-freight pt-110 pb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
                                <form action="{{ route('order') }}" method="POST" className="request-quote-form">
                                    @csrf
                                    <input type="hidden" name="service" value="freight">
                                        <div className="request-title">
                                            <h1>Request Freight</h1>
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
                                                <small className="d-block mb-10">* Kindly note that the Minimum Size of
                                                    goods is between <strong>9-10 tons</strong> per truck load
                                                </small>


                                            </div>
                                            {/* /.col-lg-12 */}
                                            <div className="col-sm-12 col-md-6">
                                                <div className="form-group">
                                                    <input type="text"
                                                           className="form-control @error('goods_type') is-invalid @enderror"
                                                           name="goods_type" placeholder="Type of Goods">
                                                        @error('goods_type')
                                                        <span
                                                            className="invalid-feedback"> <strong> {{$message}} </strong> </span>
                                                        @enderror
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <div className="form-group">
                                                    <input type="text"
                                                           className="form-control @error('goods_size') is-invalid @enderror"
                                                           name="goods_size" placeholder="Size of Goods">
                                                        @error('goods_size')
                                                        <span
                                                            className="invalid-feedback"> <strong> {{$message}} </strong> </span>
                                                        @enderror
                                                </div>
                                            </div>
                                            {/* /.col-md-6 */}
                                        </div>
                                        {/* /.row */}
                                        <div className="row mb-10">
                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                                <h5 className="form__title">Pick up and Delivery Location</h5>

                                            </div>
                                            {/* /.col-lg-12 */}
                                            <div className="col-sm-12 col-md-12">
                                                <div className="form-group">
                                                    <input type="text"
                                                           className="form-control @error('pickup_address') is-invalid @enderror"
                                                           name="pickup_address" placeholder="Full Pick up Address">
                                                        @error('pickup_address')
                                                        <span
                                                            className="invalid-feedback"> <strong> {{$message}} </strong> </span>
                                                        @enderror
                                                </div>
                                            </div>
                                            {/* /.col-md-12 */}
                                            <div className="col-sm-12 col-md-12">
                                                <div className="form-group">
                                                    <input type="text"
                                                           className="form-control @error('delivery_address') is-invalid @enderror"
                                                           name="delivery_address" placeholder="Full Delivery Address">
                                                        @error('delivery_address')
                                                        <span
                                                            className="invalid-feedback"> <strong> {{$message}} </strong> </span>
                                                        @enderror
                                                </div>
                                            </div>
                                            {/* /.col-md-12 */}
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

export default Freight
