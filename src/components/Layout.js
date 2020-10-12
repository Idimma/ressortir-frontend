import React from 'react';
import {CgProfile} from "react-icons/cg";
import {ImCart, ImHome} from "react-icons/im";
import {connect} from "react-redux";
import {IoIosArrowBack, IoIosMenu, IoIosShare, IoMdClose} from "react-icons/io";
import {AiOutlineClose} from 'react-icons/ai'
import {NavLink, withRouter} from "react-router-dom";
import {isMobile, isMobileSafari} from 'react-device-detect';
import Auth from "../utils/Auth.Model";
import {logout} from "../store/modules/auth";

class _MobileFooter extends React.Component {
    state = {
        showInstallMessage: false, online: true, showAndroidInstaller: false
    }

    componentDidMount() {
        // Detects if device is on iOS
        const isIos = () => {
            const userAgent = window.navigator.userAgent.toLowerCase();
            return /iphone|ipad|ipod/.test(userAgent);
        }
        // Detects if device is in standalone mode
        const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);


        // Checks if should display install popup notification:
        if (isMobileSafari && isIos() && !isInStandaloneMode()) {
            this.setState({showInstallMessage: true});
        }


        window.addEventListener('online', () => this.setOnlineStatus(true));
        window.addEventListener('offline', () => this.setOnlineStatus(false));
        const toggler = document.querySelector('.toggler-nav');
        if (toggler) {
            toggler.addEventListener('click', function () {
                toggler.classList.toggle('actived');
                const nav = document.querySelector('.navbar-collapse')
                if (nav) {
                    nav.classList.toggle('menu-opened');
                }
            })
        }

    }


    componentWillUnmount() {
        window.removeEventListener('online', () => this.setOnlineStatus(true));
        window.removeEventListener('offline', () => this.setOnlineStatus(false));
    }

    setOnlineStatus = isOnline => this.setState({online: isOnline})


    render() {
        const {showInstallMessage, online} = this.state;
        return (
            <div className="sticky-bottom d-sm-none bg-white mobile-footer">
                <div className="d-flex text-gray justify-content-between container py-3">
                    <NavLink className="text-center" exact to="/">
                        <ImHome className="fs-24"/>
                        <br/>
                        <span className="fs-12">Home</span>
                    </NavLink>

                    <NavLink className="text-center" to="/requests">
                        <ImCart className="fs-24"/>
                        <br/>
                        <span className="fs-12 text-center w-100">Make a Request</span>
                    </NavLink>
                    <NavLink className="text-center " to={Auth.isAuthenticated() ? "/profile" : "/login"}>
                        <CgProfile className="fs-24"/>
                        <br/>
                        <span className="fs-12">My Account</span>
                    </NavLink>
                    {Auth.isAuthenticated() &&
                    <NavLink to="#" exact className="text-center text-black-50 toggler-nav">
                        <IoIosMenu className="fs-24"/>
                        <br/>
                        <span className="fs-12">Menu</span>
                    </NavLink>
                    }
                </div>
                <div id="notifications"
                     className="d-none position-relative px-4 py-1 m-2 aligned bg-info text-white"
                     style={{borderRadius: 8,}}>
                    <img width={30} height={30} src="/images/favicon/favicon-r.png" alt="Ressortir App"/>
                    <p className="my-0 mx-3 fs-12" style={{color: '#fff'}}>
                        Allow Notifications
                    </p>
                    <button id="notificationBtn" className="btn btn-success mr-3 btn-sm fs-12">Install</button>
                    <AiOutlineClose id="notificationClose" className="text-white fs-34"/>
                </div>


                <div id="androidInstaller"
                     className="d-none position-relative px-4 py-1 m-2 aligned bg-info text-white"
                     style={{borderRadius: 8,}}>
                    <img width={30} height={30} src="/images/favicon/favicon-r.png" alt="Ressortir App"/>
                    <p className="my-0 mx-3 fs-12 " style={{color: '#fff'}}>
                        Install Ressortir App on your phone: tap install
                    </p>
                    <button id="androidInstallerBtn" className="btn btn-success btn-sm fs-12 mr-3">Install</button>
                    <AiOutlineClose id="androidInstallerClose" className="text-white fs-34"/>
                </div>


                {showInstallMessage && (
                    <div className="d-flex px-4 py-1 m-2 aligned bg-info text-white" style={{borderRadius: 8,}}>
                        <img width={30} height={30} src="/images/favicon/favicon-r.png" alt="Ressortir App"/>
                        <p className="my-0 mx-3 fs-12" style={{color: '#fff'}}>
                            Install Ressortir App on your iPhone: tap <IoIosShare className="fs-16"/> and then Add to
                            homescreen
                        </p>
                        <AiOutlineClose
                            onClick={() => this.setState({showInstallMessage: false})}
                            className="text-white fs-34"/>
                    </div>
                )
                }
                {!online && (
                    <div className="d-flex px-4 py-1 mb-2 mx-2 aligned bg-danger text-center text-white"
                         style={{borderRadius: 8,}}>
                        <p className="my-0 ml-3 w-100 text-center fs-12">App is offline</p>
                    </div>)
                }

            </div>
        );
    }
}

const MobileFooter = connect(({User: user, Auth: auth, Application: application}) => ({...auth}), null)(_MobileFooter);


class _MobileHeader extends React.Component {
    goBack = () => {
        if (this.props.hasOwnProperty('onBack')) {
            return this.props.onBack();
        }
        this.props.history.goBack();
    };

    render() {
        const {home, rightClick, title} = this.props;
        return (
            <header id="mobile-header" className="header sticky-header">
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
                            <div className="flex-1 text-center fs-20 ">{title}</div>
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
        const {user} = this.props
        return (
            <header id="header" className="header">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <NavLink className="navbar-brand" to="/" title="Ressortir Home Page">
                            <img src="/images/logo/ressortir-logo.png" className="logo-light" alt="logo"/>
                            <img src="/images/logo/ressortir-logo.png" className="logo-dark" alt="logo"/>
                        </NavLink>
                        {!Auth.isAuthenticated() ?
                            <div className="nav-form">
                                <NavLink to="/login" className="nav-form-btn btn-login-mobile"
                                         title="Login">Login</NavLink>
                            </div>
                            :
                            <div className="nav-form dash-head-link">
                                <div className="dash-link">
                                    <div className="dash-message mr-3">Welcome, {user ? user.name : ' '}</div>
                                    <NavLink to="#" onClick={()=>{
                                        this.props.logout();
                                        this.props.history.replace('/');
                                    }} className="logout-link">
                                        <i className="fa fa-power-off "/> Logout</NavLink>
                                </div>
                            </div>
                        }
                    </div>
                </nav>
            </header>
        );
    }
}

const WebHeader = connect(({User}) => ({user: User}), {logout})(withRouter(_WebHeader));


class Contact extends React.Component {
    render() {
        return (
            <section id="contact" className="contact contact-2">
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
                                    <h4 className="contact__panel-title">Branch Office</h4>
                                </div>
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
                                       title="Contact us on whatsapp"><i className="fa fa-whatsapp "/></a>
                                    <a href="https://twitter.com/RessortirGlobal" target="_blank"
                                       rel="noopener noreferrer"
                                       title="Follow us on Twitter"><i className="fa fa-twitter "/></a>
                                    <a href="https://www.instagram.com/ressortirglobal/" target="_blank"
                                       rel="noopener noreferrer"
                                       title="Follow us on Instagram"><i className="fa fa-instagram "/></a>
                                </div>
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
        const {noFooter, noMobileFooter, noSideBar,  home} = this.props;
        return (
            <div className="m-0 position-relative">
                <div className="wrapper home">
                    {isMobile ? <MobileHeader  {...this.props}/> : <WebHeader {...this.props}/>}
                    {home ? this.props.children :
                        <div className="mt-5 mt-sm-0">
                            <section style={{paddingTop: 130, paddingBottom: 100}}
                                     className={this.props.innerClass ? this.props.innerClass :
                                         !this.props.noBg ? " request-quote dash-section" : ''}>
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

                                                        {
                                                            isMobile &&
                                                            <li className=" nav__item">
                                                                <NavLink to="#" onClick={() => {
                                                                    this.props.logout()
                                                                    this.props.history.replace('/')
                                                                }}
                                                                         className="nav__item-click px-6">
                                                                    <i className="fa fa-power-off fs-18 mr-2"/>Log Out
                                                                </NavLink>
                                                            </li>}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        }
                                        {this.props.children}
                                    </div>
                                </div>
                            </section>
                        </div>}
                    {!noFooter && <Contact/>}
                </div>
                {(isMobile && !noMobileFooter) && <MobileFooter/>}
            </div>
        )
    }
}

export default connect(null, {logout})(Layout);
