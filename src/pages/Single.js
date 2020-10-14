import React, {Component} from 'react';
import Layout from "../components/Layout";
import {isMobile} from 'react-device-detect';
import {AppService} from "../services";


class SingleOrder extends Component {
    componentDidMount() {
        this.loadSingleOrder()
    }

    render() {
        return (
            <Layout noFooter={isMobile} title="Example">
                <div className=" col-12 col-md-10 dash-section__col">
                    <div className="dash-section__content">
                        <div className="request-title order-info__heading">
                            <h2>Diesel Supply: <span className="order-info__no">#10002</span> <span
                                className="order-info__status  ">Quotation Pending</span></h2>
                        </div>
                        <div className="row mt-20">
                            <div className="col-12 col-md-5">
                                <div className="order-info__detail">
                                    <span className="order-info__title"><strong>Quantity:</strong></span>
                                    <span className="order-info__data">20</span>
                                </div>
                                <div className="order-info__detail">
                                    <span className="order-info__title"><strong>Price Quote:</strong></span>
                                    <span className="order-info__data"> <i>Pending</i> </span>
                                </div>
                                <div className="order-info__detail">
                                    <span className="order-info__title"><strong>Order Date:</strong></span>
                                    <span className="order-info__data">Sep 23, 2020</span>
                                </div>
                            </div>
                            <div className="col-12 col-md-7">
                                <div className="order-info__detail">
                                    <span className="order-info__title"><strong>Name:</strong></span>
                                    <span className="order-info__data">Test Account</span>
                                </div>
                                <div className="order-info__detail">
                                    <span className="order-info__title"><strong>Phone:</strong></span>
                                    <span className="order-info__data">08133691990</span>
                                </div>
                                <div className="order-info__detail">
                                    <span className="order-info__title"><strong>Delivery Address:</strong></span>
                                    <span className="order-info__data">22, Ayodele sr</span>
                                </div>
                            </div>
                        </div>
                        <div className="request-title mt-30">
                            <h2>Order Tracking</h2>
                        </div>
                        <div className="order-tracking">
                            <div className="order-tracking__step order-tracking__step-complete">
                                <div className="order-tracking__step-details">
                                    <span className="order-tracking__step-details--title">Request Initiated</span>
                                    <span className="order-tracking__step-details--details">Sep 23, 2020</span>
                                </div>
                            </div>
                            <div className="order-tracking__step  order-tracking__step-current  ">
                                <div className="order-tracking__step-details">
                                    <span className="order-tracking__step-details--title">Quotation Pending</span>
                                    <span className="order-tracking__step-details--details">
                                        Your request is being processed. A quotation will be sent soon
                                    </span>
                                </div>
                            </div>
                            <div className="order-tracking__step">
                                <div className="order-tracking__step-details">
                                    <span className="order-tracking__step-details--title">Quotation Confirmation</span>

                                    <span className="order-tracking__step-details--details">
                                    </span>
                                </div>
                            </div>
                            <div className="order-tracking__step">
                                <div className="order-tracking__step-details">
                                    <span className="order-tracking__step-details--title">Order Initiated</span>
                                    <span className="order-tracking__step-details--details">
                                    </span>
                                </div>
                            </div>
                            <div className="order-tracking__step ">
                                <div className="order-tracking__step-details">
                                    <span className="order-tracking__step-details--title">Order Delivered</span>
                                    <span className="order-tracking__step-details--details">
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </Layout>
        )
    }

    loadSingleOrder() {
        const {id} = this.props.match.params;
        AppService.getSingleTask(id).then(() => {

        }).catch(() => {

        }).finally(() => {

        });
    }
}

export default SingleOrder
