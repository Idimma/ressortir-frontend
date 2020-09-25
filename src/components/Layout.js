import React from 'react';
import { CgProfile } from "react-icons/cg";
import { FcAbout } from "react-icons/fc";
import { ImCart, ImHome } from "react-icons/im";
import { IoIosArrowBack, IoIosMenu, IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { browserName, CustomView, isMobileSafari, isMobile, isBrowser } from 'react-device-detect';
class MobileFooter extends React.Component {

    render() {
        return (
            <div className="sticky-bottom d-sm-none bg-white mobile-footer">
                <div className="d-flex text-gray justify-content-between p-3">
                    <NavLink className="text-center" to="/">
                        <ImHome className="fs-24" />
                        <br />
                        <span className="fs-12">Home</span>
                    </NavLink>
                    <NavLink className="text-center" to="/#mission">
                        <FcAbout className="fs-24 text-black-50" />
                        <br />
                        <span className="fs-12">About Us</span>
                    </NavLink>
                    <NavLink className="text-center" to="/requests">
                        <ImCart className="fs-24" />
                        <br />
                        <span className="fs-12">Enquires</span>
                    </NavLink>
                    <NavLink className="text-center" to="/login">
                        <CgProfile className="fs-24" />
                        <br />
                        <span className="fs-12">Profile</span>
                    </NavLink>
                    <NavLink to="#" className="text-center">
                        <IoIosMenu className="fs-24" />
                        <br />
                        <span className="fs-12">Menu</span>
                    </NavLink>
                </div>
            </div>
        );
    }
}

class MobileHeader extends React.Component {
    goBack = () => {
    
}

    render() {
        const { home, rightClick, leftClick, title } = this.props;
        return (
            <header id="mobile-header" className="header sticky-header d-sm-none d-block">
                {
                    home ?
                        <nav className="navbar navbar-expand-lg">
                            <div className="container">
                                <NavLink className="navbar-brand" to="/" title="Ressortir Home Page">
                                    <img src="/images/logo/ressortir-logo.png" className="logo-light" alt="logo" />
                                    <img src="/images/logo/ressortir-logo.png" className="logo-dark" alt="logo" />
                                </NavLink>
                                <div className="nav-form">
                                    <NavLink to="/login" className="nav-form-btn btn-login-mobile"
                                        title="Login">Login</NavLink>
                                </div>
                            </div>
                        </nav>
                        :

                        <div className="aligned w-100 p-3 fs-24 spaced">
                            <div >
                                <IoIosArrowBack onClick={this.goBack} /> 
                            </div>
                            <div className="flex-1 text-center fs-20">{title}</div>
                            <div >
                                {rightClick ? <IoMdClose hidden={!rightClick} /> : <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}
                            </div>
                        </div>
                }
            </header>
        );
    }
}
class WebHeader extends React.Component {

    render() {
        return (
            <header id="header" className="header d-sm-block d-none">
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <NavLink className="navbar-brand" to="/" title="Ressortir Home Page">
                            <img src="/images/logo/ressortir-logo.png" className="logo-light" alt="logo" />
                            <img src="/images/logo/ressortir-logo.png" className="logo-dark" alt="logo" />
                        </NavLink>
                        <div className="nav-form">
                            <NavLink to="/login" className="nav-form-btn btn-login-mobile"
                                title="Login">Login</NavLink>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}
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
                                    <a href="https://api.whatsapp.com/send?phone=2348063096005" target="_blank"
                                        title="Contact us on whatsapp"><i className="fa fa-whatsapp "></i></a>
                                    <a href="https://twitter.com/RessortirGlobal" target="_blank"
                                        title="Follow us on Twitter"><i className="fa fa-twitter "></i></a>
                                    <a href="https://www.instagram.com/ressortirglobal/" target="_blank"
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
        const { noFooter, noMobileFooter } = this.props;
        console.log('isBrowser', isBrowser)
        console.log('isMobile', isMobile)
        console.log('browserName', browserName)
        return (
            <div>
                <div className="wrapper home">
                    <MobileHeader home={this.props.home}  title={this.props.title} />
                    <WebHeader />
                    <div className="mt-5 mt-sm-0" style={{ paddingTop: this.props.transparent ? 80 : 0 }}>
                        {this.props.children}
                    </div>
                    {!noFooter && <Contact />}
                </div>
                {!noMobileFooter && <MobileFooter />}
            </div>
        )
    }
}

export default Layout;
