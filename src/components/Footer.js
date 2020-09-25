import React from 'react'
import {FaFacebook, FaTwitter, FaYoutube} from "react-icons/fa";
import {appleStore, googlePlay} from "../assets/img";
import {NavLink} from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="content">
                    <div className="menu-hierarchy">
                        <div className="menu-folder dynamic">
                            <div className="menu-folder-control showing">
                                <a  href="javascript:void(0)"  className="button"   style={{fontSize: 17}}>Company</a>
                            </div>
                            <div className="menu-folder-items">
                                <NavLink className="button" to="/terms">About us</NavLink>
                                <NavLink className="button" to="/terms">Term of Service</NavLink>
                                <NavLink className="button" to="/terms">Privacy policy</NavLink>
                                <NavLink className="button" to="/terms">Career</NavLink>
                            </div>
                        </div>
                        <div className="menu-folder dynamic">
                            <div className="menu-folder-control showing">
                                <a href="javascript:void(0)"  className="button">Existing Members</a>
                            </div>
                            <div className="menu-folder-items">
                                <a className="button" href="javascript:void(0)"  role="button" onClick={window.togglePostATask}>Post a task</a>
                                <NavLink className="button" to="tasks">Browse tasks</NavLink>
                                <NavLink to="login" className="button">Login</NavLink>
                                <a className="button" href="/support">Support centre</a>
                            </div>
                        </div>
                        <div className="menu-folder dynamic">
                            <div className="menu-folder-control showing">
                                <NavLink to="b/rowse-task?filter=popular" className="button" >Popular Categories</NavLink>
                            </div>
                            <div className="menu-folder-items">
                                <NavLink className="button" to="/browse-task?filter=popular" >All Services</NavLink>
                            </div>
                        </div>
                        <div className="menu-folder dynamic">
                            <div className="menu-folder-control showing">
                                <a href={'#'} className="button">Partners</a>
                            </div>
                            <div className="menu-folder-items">
                                <a href={'#'} className="button" target="_blank"
                                    href="https://google.com">Google</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-links small row">
                        <div className="app-stores nine columns">
                            <a className="inline-block"
                               rel="noopener noreferrer"
                               target="_blank"
                               href="https://play.google.com/store/apps/details?id=au.com.airtasker">
                                <img alt="image" src={googlePlay} alt="Google play"/>
                            </a>
                            <a className="inline-block"
                               rel="noopener noreferrer"
                               target="_blank"
                               href="https://itunes.apple.com/au/app/airtasker/id512137061?mt=8">
                                <img alt="image" src={appleStore} alt="Apple store"/>
                            </a>
                            <div className="social inline-block">
                                <a target="_blank"
                                   rel="noopener noreferrer"
                                   href="https://www.facebook.com/Cititasker/">
                                    <FaFacebook/>

                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/airtasker">
                                    <FaTwitter/>
                                </a>
                                <a target="_blank" rel="noopener noreferrer"
                                   href="https://www.youtube.com/user/Cititasker">
                                    <FaYoutube/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
