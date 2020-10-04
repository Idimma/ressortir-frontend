import React, {Component} from 'react';
import {isMobile} from 'react-device-detect';
import Layout from "../components/Layout";
import diesel from '../assets/images/icons/diesel.png';
import gas from '../assets/images/icons/gas.png';
import freight from '../assets/images/icons/freight.png';
import {NavLink} from "react-router-dom";
import Auth from "../utils/Auth.Model";
import HomePage from "./Home";

class RequestPage extends Component {
    render() {
        if (isMobile) {
            return (
                <Layout noFooter={isMobile} noBg title="Order Request">
                    <div className="container pt-50 mt-60 pt-sm-0">
                        <div className="mb-4 mt-20 text-center">
                            <p className="p-0 ">
                                Please select the order type you will like to have an estimate for.
                            </p>
                        </div>
                        <div className="row text-center">
                            <div className="col-sm-6 col-md-4">
                                <div className="request-item ">
                                    <div className="aligned mr-auto">
                                        <img src={diesel} alt=""/>
                                        <h1 className="fs-18">Diesel Supply</h1>
                                    </div>
                                    <NavLink to={Auth.isAuthenticated() ? "/dashboard/diesel" : "/diesel"}
                                             className="btn btn-danger btn-round ml-auto"
                                             title="Diesel Supply">
                                        <span>Request</span>
                                    </NavLink>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-4">
                                <div className="request-item ">
                                    <div className="aligned mr-auto">
                                        <img src={gas} alt=""/>
                                        <h1 className="fs-18">LPG Tank Refill</h1>
                                    </div>
                                    <NavLink to={Auth.isAuthenticated() ? "/dashboard/lpg" : "/lpg"}
                                             className="btn btn-danger btn-round ml-auto"
                                             title="LPG Tank Refill">
                                        <span>Request</span>
                                    </NavLink>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-4">
                                <div className="request-item ">
                                    <div className="aligned mr-auto">
                                        <img src={freight} alt=""/>
                                        <h1 className="fs-18">Freight Distribution</h1>
                                    </div>
                                    <NavLink to={Auth.isAuthenticated() ? "/dashboard/freight" : "/freight"}
                                             className="btn btn-danger btn-round ml-auto"
                                             title="Freight Distribution">
                                        <span>Request</span>
                                    </NavLink>
                                </div>
                            </div>

                            {/*
                                    <div className="col-sm-6 col-md-4">
                                        <div className="service-item service-item-1">
                                            <div className="service__icon">
                                                <i className="service__icon-gas"></i>

                                                <h1 className="service__title">LPG Tank Refill</h1>
                                            </div>
                                            <div className="service__content">
                                                <a href="https://ressortir.com/lpg" className="btn btn__white"
                                                    title="LPG Tank Refill">
                                                    <span>Request</span>
                                                </a>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-sm-6 col-md-4">
                                        <div className="service-item service-item-2">
                                            <div className="service__icon">
                                                <i className="service__icon-freight"></i>
                                                <h1 className="service__title">Freight Distribution</h1>
                                            </div>
                                            <div className="service__content">
                                                <a href="https://ressortir.com/freight" className="btn btn__white"
                                                    title="Freight Distribution">
                                                    <span>Request</span>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
 */}


                        </div>

                    </div>
                </Layout>
            )
        }

        return (<HomePage/>)
    }
}

export default RequestPage
