import React, {Component} from 'react';
import Layout from "../components/Layout";
import {isMobile} from 'react-device-detect';
import {AppService} from "../services";
import {toast} from "react-toastify";
import {Spinner} from "reactstrap";

function TrackingStep({title, text, active, completed, price}) {
    let className = "order-tracking__step ";
    if (active) {
        className += "order-tracking__step-current";
    }
    if (completed) {
        className += "order-tracking__step-complete";
    }
    return <div className={className}>
        <div className="order-tracking__step-details">
            <span className="order-tracking__step-details--title">{title}</span>
            <span className="order-tracking__step-details--details">
            {price && <>The quote for this order is: <span className="order-info__status">{price}</span>. You will
                recieve a call to confirm your order</>}
                {text}
            </span>
        </div>
    </div>;
}

class SingleOrder extends Component {
    state = {
        data: {}
    };

    componentDidMount() {
        this.loadSingleOrder()
    }

    renderOrderTab = () => {
        const {data, isLoading} = this.state;

        if (isLoading) {
            return (
                <div className="w-100 justify-content-center align-items-center" style={{minHeight: 300}}>
                    <Spinner/>
                </div>
            )
        }

        if (data && data.service) {
            if (data.service.name === 'diesel') {
                return (
                    <div className="row mt-20">
                        <div className="col-12 col-md-5">
                            <div className="order-info__detail">
                                <span className="order-info__title"><strong>Quantity:</strong></span>
                                <span className="order-info__data">{data.quantity}</span>
                            </div>
                            <div className="order-info__detail">
                                <span className="order-info__title"><strong>Price Quote:</strong></span>
                                <span className="order-info__data"><i>{data.price}</i> </span>
                            </div>
                            <div className="order-info__detail">
                                <span className="order-info__title"><strong>Order Date:</strong></span>
                                <span className="order-info__data">{data.created_at}</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-7">
                            <div className="order-info__detail">
                                <span className="order-info__title"><strong>Name:</strong></span>
                                <span className="order-info__data">{data.name}</span>
                            </div>
                            <div className="order-info__detail">
                                <span className="order-info__title"><strong>Phone:</strong></span>
                                <span className="order-info__data">{data.phone}</span>
                            </div>
                            <div className="order-info__detail">
                                <span className="order-info__title"><strong>Delivery Address:</strong></span>
                                <span className="order-info__data">{data.delivery_address}</span>
                            </div>
                        </div>
                    </div>
                )
            }
            if (data.service.name === 'gas') {
                return (
                    <div className="row mt-20">
                        <div className="col-12 col-md-5">
                            <div className="order-info__detail">
                                <span className="order-info__title"><strong>Gas Size:</strong></span>
                                <span className="order-info__data">{data && data.order && data.order.size}</span>
                            </div>
                            <div className="order-info__detail">
                                <span className="order-info__title"><strong>Order Amount:</strong></span>
                                <span className="order-info__data">N{data.amount}</span>
                            </div>
                            <div className="order-info__detail">
                                <span className="order-info__title"><strong>Payment Mode:</strong></span>
                                <span
                                    className="order-info__data">{data && data.order && data.order.payment_option}</span>
                            </div>
                            <div className="order-info__detail">
                                <span className="order-info__title"><strong>Order Date:</strong></span>
                                <span
                                    className="order-info__data">{data.created_at}</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-7">
                            <div className="order-info__detail">
                                <span className="order-info__title"><strong>Name:</strong></span>
                                <span className="order-info__data">{data.name}</span>
                            </div>
                            <div className="order-info__detail">
                                <span className="order-info__title"><strong>Phone:</strong></span>
                                <span className="order-info__data">{data.phone}</span>
                            </div>
                            <div className="order-info__detail">
                                <span className="order-info__title"><strong>Delivery Area:</strong></span>
                                <span
                                    className="order-info__data">{data && data.order && data.order.delivery_area}</span>
                            </div>
                            <div className="order-info__detail">
                                <span className="order-info__title"><strong>Delivery Address:</strong></span>
                                <span
                                    className="order-info__data">{data && data.order && data.order.delivery_address}</span>
                            </div>
                        </div>
                    </div>
                )
            }


            if (data.service.name === 'freight') {
                return (
                    <div className="row mt-20">
                        <div className="col-12 col-md-5">
                            <div className="order-info__detail">
                                <span className="order-info__title"><strong>Name:</strong></span>
                                <span className="order-info__data">{data.name}</span>
                            </div>
                            <div className="order-info__detail">
                                <span className="order-info__title"><strong>Type of Goods:</strong></span>
                                <span className="order-info__data">{data && data.order && data.order.goods_type}</span>
                            </div>
                            <div className="order-info__detail">
                                <span className="order-info__title"><strong>Size of Goods:</strong></span>
                                <span className="order-info__data">{data && data.order && data.order.goods_size}</span>
                            </div>
                            <div className="order-info__detail">
                                <span className="order-info__title"><strong>Order Date:</strong></span>
                                <span className="order-info__data">{data && data.created_at}</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-7">

                            <div className="order-info__detail">
                                <span className="order-info__title"><strong>Price Quote:</strong></span>
                                <span className="order-info__data"> <i>{data && data.price}</i> </span>
                            </div>
                            <div className="order-info__detail">
                                <span className="order-info__title"><strong>Phone:</strong></span>
                                <span className="order-info__data">{data && data.phone}</span>
                            </div>
                            <div className="order-info__detail">
                                <span className="order-info__title"><strong>Pickup Address:</strong></span>
                                <span
                                    className="order-info__data">{data && data.order && data.order.pickup_address}</span>
                            </div>
                            <div className="order-info__detail">
                                <span className="order-info__title"><strong>Delivery Address:</strong></span>
                                <span
                                    className="order-info__data">{data && data.order && data.order.delivery_address}</span>
                            </div>
                        </div>


                        <div className="col-12 col-md-7">
                            <div className="order-info__detail">
                                <span className="order-info__title"><strong>Name:</strong></span>
                                <span className="order-info__data">{data.name}</span>
                            </div>
                            <div className="order-info__detail">
                                <span className="order-info__title"><strong>Phone:</strong></span>
                                <span className="order-info__data">{data.phone}</span>
                            </div>
                            <div className="order-info__detail">
                                <span className="order-info__title"><strong>Delivery Area:</strong></span>
                                <span
                                    className="order-info__data">{data && data.order && data.order.pickup_address}</span>
                            </div>
                            <div className="order-info__detail">
                                <span className="order-info__title"><strong>Delivery Address:</strong></span>
                                <span
                                    className="order-info__data">{data && data.order && data.order.delivery_address}</span>
                            </div>
                        </div>
                    </div>
                )
            }
        }

        return (
            <div className="w-100 justify-content-center align-items-center" style={{minHeight: 300}}>
                <Spinner/>
            </div>
        )
    };
    renderStatus = () => {
        const {data, isLoading} = this.state;

        if (isLoading) {
            return (
                <div className="w-100 justify-content-center align-items-center" style={{minHeight: 300}}>
                    <Spinner/>
                </div>
            )
        }
        if (data.service_name === 'gas') {
            return (
                <div className="order-tracking">
                    <TrackingStep
                        completed
                        title="Order Initiated"
                        text={data && data.created_at}
                    />
                    <TrackingStep
                        completed={data.status_id === '1'}
                        active={data.status_id === '0'}
                        title="Order Processing"
                        text={'Your order is currently being processed'}
                    />
                    <TrackingStep
                        completed={data.status_id === '1'}
                        title="Order Delivered"
                    />
                </div>
            )
        }
        // if (data.service_name === 'diesel' || data.service_name === 'lpg') {
            return (
                <div className="order-tracking">
                    <TrackingStep completed title="Request Initiated" text={data.created_at}/>
                    <TrackingStep
                        title="Quotation Pending" active={data.status_id === '0'}
                        text={data.status_id === '0' && 'Your request is being processed. A quotation will be sent soon'}
                        completed={data.status_id === '1' || data.status_id === 'a' || data.status_id === 'b'}
                    />

                    <TrackingStep
                        title="Quotation Confirmation"
                        active={data.status_id === 'a'}
                        completed={data.status_id === '1' || data.status_id === 'b'}
                        price={data.status_id === 'a' && data.price}
                    />

                    <TrackingStep
                        completed={data.status_id === '1'}
                        active={data.status_id === 'b'}
                        title="Order Initiated"
                        text={data.status_id === 'b' && 'Delivery Date: ' + (data && data.order && data.order.estimated_delivery_date)}
                    />
                    <TrackingStep
                        title="Order Delivered"
                        completed={data.status_id === '1'}
                        text={data.status_id === '1' && 'Delivery Date: ' + (data && data.order && data.order.delivery_date)}
                    />
                </div>
            )
        // }
    };

    render() {
        const {id} = this.props.match.params;
        const {data} = this.state;
        return (
            <Layout noFooter={isMobile} title={`Order ${id}`}>
                <div className=" col-12 col-md-10 dash-section__col">
                    <div className="dash-section__content">
                        <div className="request-title order-info__heading">
                            <h2>{data && data.service && data.service.label}: <span
                                className="order-info__no">#{id}</span> <span
                                className="order-info__status  ">{data.status_message}</span></h2>
                        </div>

                        {this.renderOrderTab()}
                        <div className="request-title mt-30">
                            <h2>Order Tracking</h2>
                        </div>
                        {this.renderStatus()}
                        {data.status_id === '1' && <form method="POST">
                            <input type="hidden" name="service" value="gas"/>
                            <input type="hidden" name="size" value={data.order.size}/>
                            <input type="hidden" name="payment_option" value={data.order.payment_option}/>
                            <input type="hidden" name="delivery_area" value={data.order.delivery_area}/>
                            <input type="hidden" name="delivery_address" value={data.order.delivery_address}/>
                            <input type="hidden" name="name" value={data.name}/>
                            <input type="hidden" name="phone" value={data.phone}/>

                            <button type="submit" className="btn btn__secondary">Order Again</button>
                        </form>}
                    </div>

                </div>

            </Layout>
        )
    }

    loadSingleOrder = () => {
        const {id} = this.props.match.params;
        this.setState({isLoading: true});

        AppService.getSingleTask(id).then(({data: {data}}) => {
            this.setState({data})
        }).catch((e) => {
            toast.dark('Something went wrong');
            this.props.history.goBack();
        }).finally(() => {
            this.setState({isLoading: false})
        });
    }
}

export default SingleOrder
