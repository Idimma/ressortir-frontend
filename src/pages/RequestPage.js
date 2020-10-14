import React, {Component} from 'react';
import {isMobile} from 'react-device-detect';
import Layout from "../components/Layout";
import diesel from '../assets/images/icons/diesel.png';
import gas from '../assets/images/icons/gas.png';
import g_svg from '../assets/images/icons/freight.png';
import freight from '../assets/images/icons/gas.svg';
import {NavLink} from "react-router-dom";
import Auth from "../utils/Auth.Model";
import HomePage from "./Home";

class RequestPage extends Component {
    render() {
        if (isMobile) {
            return (
                <Layout noFooter={isMobile} noBg title="Order Request">
                    <div className="container ">
                        <div className="mb-4  text-center">
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
                                        <h1 className="fs-18">Domestic Gas Refill</h1>
                                    </div>
                                    <NavLink to={Auth.isAuthenticated() ? "/dashboard/gas" : "/gas"}
                                             className="btn btn-danger btn-round ml-auto"
                                             title="Gas Distribution">
                                        <span>Request</span>
                                    </NavLink>
                                </div>
                            </div>

                            <div className="col-sm-6 col-md-4">
                                <div className="request-item ">
                                    <div className="aligned mr-auto">
                                        <img src={g_svg} alt=""/>
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
                        </div>
                    </div>
                </Layout>
            )
        }

        return (<HomePage/>)
    }
}

export default RequestPage
