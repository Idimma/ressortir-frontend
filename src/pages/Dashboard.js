import React, {Component} from 'react';
import Layout from "../components/Layout";
import {isMobile} from 'react-device-detect';


class Dashboard extends Component {
    render() {
        return (
            <Layout noFooter={isMobile} title="Dashboard">
                <div className=" col-12 col-md-10 dash-section__col">
                    <div className="dash-section__content">
                        <div className="request-title">
                            <h2>Current Order</h2>
                        </div>
                        <div className="row mb-10">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <div className="table-responsive">
                                    <table className="table res-table res-table-current">
                                        <thead>
                                        <tr>
                                            <th scope="col">Order No</th>
                                            <th scope="col">Order</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Date</th>
                                            <th scope="col"/>
                                        </tr>
                                        </thead>
                                        <tbody>

                                        <tr>
                                            <td scope="row">10003</td>
                                            <td><a className="order-type"
                                                   href="http://127.0.0.1:8000/dashboard/order/10003">Diesel
                                                Supply</a></td>
                                            <td>Quotation Pending</td>
                                            <td>Sep 23, 2020</td>
                                            <td><a href="http://127.0.0.1:8000/dashboard/order/10003"
                                                   className="btn btn__sm btn__outline">View Order</a></td>
                                        </tr>
                                        <tr>
                                            <td scope="row">10002</td>
                                            <td><a className="order-type"
                                                   href="http://127.0.0.1:8000/dashboard/order/10002">Diesel
                                                Supply</a></td>
                                            <td>Quotation Pending</td>
                                            <td>Sep 23, 2020</td>
                                            <td><a href="http://127.0.0.1:8000/dashboard/order/10002"
                                                   className="btn btn__sm btn__outline">View Order</a></td>
                                        </tr>
                                        <tr>
                                            <td scope="row">10001</td>
                                            <td><a className="order-type"
                                                   href="http://127.0.0.1:8000/dashboard/order/10001">Diesel
                                                Supply</a></td>
                                            <td>Quotation Pending</td>
                                            <td>Sep 23, 2020</td>
                                            <td><a href="http://127.0.0.1:8000/dashboard/order/10001"
                                                   className="btn btn__sm btn__outline">View Order</a></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="request-title mt-20">
                            <h2>Completed Orders</h2>
                        </div>
                        <div className="row mb-10">
                            <div className="col-sm-12 col-md-12 col-lg-12">
                                <div className="table-responsive">
                                    There are no completed orders
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Layout>
        )
    }
}

export default Dashboard
