import React, {Component} from 'react';
import Layout from "../components/Layout";
import {isMobile} from 'react-device-detect';
import {connect} from 'react-redux';
import {NavLink} from "react-router-dom";
import {AppService} from "../services";
import {catchError} from "../utils";


class Dashboard extends Component {
    state = {
        completed: [],
        current: [],
        isLoading: false
    }

    componentDidMount() {
        // this.loadAllOrders();

    }

    loadAllOrders() {
        this.setState({isLoading: true});
        AppService.allOrders().then(({data: {data}}) => {
            this.setState({isLoading: false, ...data})
        }).catch((error) => {
            this.setState({isLoading: false})
            catchError(error)
        });
    }
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (prevProps.token !== this.props.token) {
    //         // this.loadAllOrders();
    //     }
    // }

    render() {
        const {completed, current} = this.state;
        return (
            <Layout noFooter={isMobile} padded={isMobile} title="Dashboard">
                <div className=" col-12 col-md-10 dash-section__col">
                    <div className="dash-section__content">
                        <div className="request-title">
                            <h2>Current Order</h2>
                        </div>
                        {
                            !current.length ?
                                <div className="row mb-10">
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <div className="table-responsive">
                                            There are no current orders
                                        </div>
                                    </div>
                                </div> :
                                <div className="row mb-10">
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <div className="table-responsive">
                                            <table className="table res-table res-table-current">
                                                <thead>
                                                <tr>
                                                    <th>Order No</th>
                                                    <th>Order</th>
                                                    <th>Status</th>
                                                    <th>Date</th>
                                                    <th/>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    current.map(order => {
                                                        return (
                                                            <tr key={order.id}>
                                                                <td>{order.order_no}</td>
                                                                <td>
                                                                    <NavLink className="order-type text-capitalize"
                                                                             to={`/dashboard/order/${order.order_no}`}>
                                                                        {order.service_name} Supply
                                                                    </NavLink>
                                                                </td>
                                                                <td>{order.status_message}</td>
                                                                <td>{order.created_at}</td>
                                                                <td><NavLink to="/dashboard/order/10003"
                                                                             className="btn btn__sm btn__outline">View
                                                                    Order</NavLink></td>
                                                            </tr>
                                                        )
                                                    })
                                                }


                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                        }
                        <div className="request-title mt-20">
                            <h2>Completed Orders</h2>
                        </div>
                        {
                            !completed.length ?
                                <div className="row mb-10">
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <div className="table-responsive">
                                            There are no completed orders
                                        </div>
                                    </div>
                                </div> :
                                <div className="row mb-10">
                                    <div className="col-sm-12 col-md-12 col-lg-12">
                                        <div className="table-responsive">
                                            <table className="table res-table res-table-current">
                                                <thead>
                                                <tr>
                                                    <th>Order No</th>
                                                    <th>Order</th>
                                                    <th>Status</th>
                                                    <th>Date</th>
                                                    <th/>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {
                                                    completed.map(order => {
                                                        return (
                                                            <tr key={order.id}>
                                                                <td>{order.order_no}</td>
                                                                <td>
                                                                    <NavLink className="order-type text-capitalize"
                                                                             to={`/dashboard/order/${order.order_no}`}>
                                                                        {order.service_name} Supply
                                                                    </NavLink>
                                                                </td>
                                                                <td>{order.status_message}</td>
                                                                <td>{order.created_at}</td>
                                                                <td><NavLink to="/dashboard/order/10003"
                                                                             className="btn btn__sm btn__outline">View
                                                                    Order</NavLink></td>
                                                            </tr>
                                                        )
                                                    })
                                                }

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                        }

                    </div>

                </div>
            </Layout>
        )
    }
}

export default connect(({Auth, User, Application}) => ({...Auth}))(Dashboard)
