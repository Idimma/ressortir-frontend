import React from 'react';
import {CgProfile} from "react-icons/cg";
import {ImCart, ImHome} from "react-icons/im";
import {IoIosArrowBack, IoIosMenu, IoMdClose} from "react-icons/io";
import {NavLink, withRouter} from "react-router-dom";
import {isMobile} from 'react-device-detect';
import Auth from "../utils/Auth.Model";

class MobileFooter extends React.Component {
    componentDidMount() {
        const toggler = document.querySelector('.toggler-nav');
        if (toggler)
            toggler.addEventListener('click', function () {
                toggler.classList.toggle('actived');
                document.querySelector('.navbar-collapse').classList.toggle('menu-opened');
            })

    }

    render() {
        return (
            <div className="sticky-bottom d-sm-none bg-white mobile-footer">
                <div className="d-flex text-gray justify-content-between px-5 py-3">
                    <NavLink className="text-center" to="/">
                        <ImHome className="fs-24"/>
                        <br/>
                        <span className="fs-12">Home</span>
                    </NavLink>

                    <NavLink className="text-center" to="/requests">
                        <ImCart className="fs-24"/>
                        <br/>
                        <span className="fs-12">Enquires</span>
                    </NavLink>
                    <NavLink className="text-center" to={Auth.isAuthenticated() ? "/profile" : "/login"}>
                        <CgProfile className="fs-24"/>
                        <br/>
                        <span className="fs-12">Profile</span>
                    </NavLink>
                    {Auth.isAuthenticated() &&
                    <NavLink to="#" className="text-center toggler-nav">
                        <IoIosMenu className="fs-24"/>
                        <br/>
                        <span className="fs-12">Menu</span>
                    </NavLink>
                    }
                </div>
            </div>
        );
    }
}

class _MobileHeader extends React.Component {
    goBack = () => {
        if (this.props.hasOwnProperty('onBack')) {
            return this.props.onBack();
        }

        this.props.history.goBack();
    }

    render() {
        const {home, rightClick, title} = this.props;
        return (
            <header id="mobile-header" className="header sticky-header d-sm-none d-block">
                {
                    home ?
                        <nav className="navbar navbar-expand-lg">
                            <div className="container">
                                <NavLink className="navbar-brand" to="/" title="Ressortir Home Page">
                                    <img src="/images/logo/ressortir-logo.png" className="logo-light" alt="logo"/>
                                    <img src="/images/logo/ressortir-logo.png" className="logo-dark" alt="logo"/>
                                </NavLink>
                                <div className="nav-form">
                                    <NavLink to="/login" className="nav-form-btn btn-login-mobile"
                                             title="Login">Login</NavLink>
                                </div>
                            </div>
                        </nav>
                        :

                        <div className="aligned w-100 p-3 fs-24 spaced">
                            <div>
                                <IoIosArrowBack onClick={this.goBack}/>
                            </div>
                            <div className="flex-1 text-center fs-20">{title}</div>
                            <div>
                                {rightClick ? <IoMdClose hidden={!rightClick}/> :
                                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}
                            </div>
                        </div>
                }
            </header>
        );
    }
}

const MobileHeader = withRouter(_MobileHeader);

class _WebHeader extends React.Component {
    render() {
        return (
            <header id="header" className="header d-sm-block d-none">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <NavLink className="navbar-brand" to="/" title="Ressortir Home Page">
                            <img src="/images/logo/ressortir-logo.png" className="logo-light" alt="logo"/>
                            <img src="/images/logo/ressortir-logo.png" className="logo-dark" alt="logo"/>
                        </NavLink>
                        {Auth.isAuthenticated() ?
                            <div className="nav-form">
                                <NavLink to="/login" className="nav-form-btn btn-login-mobile"
                                         title="Login">Login</NavLink>
                            </div>
                            :
                            <div className="nav-form dash-head-link">
                                <div className="dash-link">
                                    <div className="dash-message mr-3">Welcome, Test Account</div>
                                    <a href="http://127.0.0.1:8000/logout" className="logout-link">
                                        <i className="fa fa-power-off "/> Logout</a>
                                </div>
                            </div>
                        }
                    </div>
                </nav>
            </header>
        );
    }
}

const WebHeader = withRouter(_WebHeader);


class Contact extends React.Component {
    render() {
        return (
            <section id="contact" className="contact mb-4 mb-sm-0 contact-2">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <div className="contact-panel">
                                <div className="contact__panel-header">
                                    <h4 className="contact__panel-title">Head Office</h4>
                                </div>
                                <ul className="contact__list list-unstyled">
                                    <li>10A Kafayat Abdulrasaq Street off Fola Osibo Lekki Phase 1, Lagos State.
                                    </li>
                                    <li>Phone Number: +234 806 309 6005</li>
                                    <li>Email: info@ressortir.com</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <div className="contact-panel">
                                <div className="contact__panel-header">
                                    {/* /.contact-panel-icon */}
                                    <h4 className="contact__panel-title">Branch Office</h4>
                                </div>
                                {/* /.contact-panel-header */}
                                <ul className="contact__list list-unstyled">
                                    <li>21, Marine Road, Liverpool Apapa, Lagos state.</li>
                                    <li>Phone number: +234 905 123 7664</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-4">
                            <div className="contact-panel social-panel">

                                <div className="social__icons justify-content-center">
                                    <h5 className="social__title">Contact us on Social Media:</h5>
                                    <a href="https://api.whatsapp.com/send?phone=2348063096005"
                                       rel="noopener noreferrer"
                                       target="_blank"
                                       title="Contact us on whatsapp"><i className="fa fa-whatsapp "></i></a>
                                    <a href="https://twitter.com/RessortirGlobal" target="_blank"
                                       rel="noopener noreferrer"
                                       title="Follow us on Twitter"><i className="fa fa-twitter "></i></a>
                                    <a href="https://www.instagram.com/ressortirglobal/" target="_blank"
                                       rel="noopener noreferrer"
                                       title="Follow us on Instagram"><i className="fa fa-instagram "></i></a>
                                </div>
                                {/* /.social-icons */}

                                <div className="footer__copyright">
                                    <span>Copyright © 2020 Ressortir</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

class Layout extends React.Component {


    render() {
        const {noFooter, noMobileFooter, noSideBar} = this.props;
        return (
            <div>
                <div className="wrapper home">
                    {isMobile ? <MobileHeader  {...this.props}/>
                        : <WebHeader {...this.props}/>}
                    <div className="mt-5 mt-sm-0" style={{
                        paddingTop: this.props.padded ? 80 : 0,
                        paddingBottom: this.props.padded ? 80 : 0
                    }}>
                        <section id="requestQuote"
                                 className={this.props.innerClass ? this.props.innerClass : !this.props.noBg ? " request-quote dash-section" : ''}>
                            <div className="container">
                                <div className="row">
                                    {(!noSideBar && Auth.isAuthenticated()) &&
                                    <div className="col-12 col-md-2 dash-nav__col">
                                        <div className="dash-nav navbar navbar-expand-lg">
                                            <div className="collapse navbar-collapse" id="mainNavigation">
                                                <ul className="navbar-nav">
                                                    <li className="nav__item">
                                                        <NavLink to="/dashboard"
                                                                 className="nav__item-link nav-icon-orders ">Orders</NavLink>
                                                    </li>
                                                    <li className="nav__item">
                                                        <NavLink to="/dashboard/diesel"
                                                                 className="nav__item-link nav-icon-order_diesel">Request
                                                            Diesel</NavLink>
                                                    </li>
                                                    <li className="nav__item">
                                                        <NavLink to="/dashboard/lpg"
                                                                 className="nav__item-link nav-icon-order_lpg">Request
                                                            LPG
                                                        </NavLink>
                                                    </li>
                                                    <li className="nav__item">
                                                        <NavLink to="/dashboard/freight"
                                                                 className="nav__item-link nav-icon-order_freight ">Request
                                                            Freight</NavLink>
                                                    </li>
                                                    <li className=" nav__item">
                                                        <NavLink to="/profile"
                                                                 className="nav__item-link nav-icon-account ">Account
                                                            Info</NavLink>
                                                    </li>
                                                    <li className=" nav__item">
                                                        <NavLink to="/dashboard/gas"
                                                                 className="nav__item-link nav-icon-order_gas ">Order
                                                            Gas</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    }
                                    {this.props.children}
                                </div>
                            </div>
                        </section>
                    </div>
                    {!noFooter && <Contact/>}
                </div>
                {(isMobile && !noMobileFooter) && <MobileFooter/>}
            </div>
        )
    }
}

export default Layout;
