import 'react-toastify/dist/ReactToastify.css';
import './assets/scss/main.scss';

import { AppRoute, GuestRoute } from "./components/AppRoute";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import React, { Component } from 'react';
import { isMobile, isMobileSafari } from "react-device-detect";
import { loadUserDetails, logout } from "./store/modules/auth";

import Contact from './pages/Contact';
import DashDiesel from "./pages/dashboard/Diesel";
import DashFreight from "./pages/dashboard/Freight";
import DashGas from "./pages/dashboard/Gas";
import DashLpg from "./pages/dashboard/Lpg";
import Dashboard from "./pages/Dashboard";
import Diesel from './pages/Diesel';
import Forget from "./pages/Forget";
import Freight from './pages/Freight';
import Gas from './pages/Gas';
import HomePage from "./pages/Home";
import Login from "./pages/Login";
import Lpg from './pages/Lpg';
import NewUser from "./pages/NewUser";
import Privacy from './pages/Privacy';
import Profile from "./pages/Profile";
import { Provider } from 'react-redux';
import RequestPage from "./pages/RequestPage";
import Reset from "./pages/Reset";
import SingleOrder from "./pages/Single";
import Terms from './pages/Terms';
import { ToastContainer } from 'react-toastify';
import _404 from "./pages/_404";
import store from "./store";

let installPromptEvent;




class Logout extends Component {
    componentDidMount() {
        store.dispatch(logout());
    }
    render() {
       return <Redirect to="/login"/>
    }

}

class Router extends Component {
    componentDidMount() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                        registration.onupdatefound = () => {
                            const installingWorker = registration.installing;
                            if (installingWorker == null) {
                                return;
                            }
                            installingWorker.onstatechange = () => {
                                if (installingWorker.state === 'installed') {
                                    if (navigator.serviceWorker.controller) {
                                        // We will use this callback to present button to allow user to refresh
                                        // the application

                                        // Execute callback
                                        navigator.serviceWorker.ready.then(registration => {
                                            registration.update().then(() => {

                                            });
                                        });

                                    } else {
                                        // Not necessary for this example
                                    }
                                }
                            };
                        };
                    })
                    .catch(registrationError => {
                        console.log('SW registration failed: ', registrationError);
                    });


            });
        }
        window.addEventListener('beforeinstallprompt', this.installPrompt);
        window.addEventListener('appinstalled', this.notificationPrompt);
        store.dispatch(loadUserDetails());
    }


    notificationPrompt = (event) => {
        event.preventDefault();
        // console.log(event);
        // notificationEvents = event;
        const notification = document.getElementById("notificationBtn");
        if(notification){
            notification.addEventListener('click', function(e) {
                Notification.requestPermission().then(function(result) {
                    if(result === 'granted') {
                        // randomNotification();
                    }
                });
            });
        }

//
// // Setting up random Notification
//         function randomNotification() {
//             var randomItem = Math.floor(Math.random()*games.length);
//             var notifTitle = games[randomItem].name;
//             var notifBody = 'Created by '+games[randomItem].author+'.';
//             var notifImg = 'data/img/'+games[randomItem].slug+'.jpg';
//             var options = {
//                 body: notifBody,
//                 icon: notifImg
//             }
//             var notif = new Notification(notifTitle, options);
//             setTimeout(randomNotification, 30000);
//         };
    }


    installPrompt = (event) => {
        event.preventDefault();
        installPromptEvent = event;
        if (isMobile && !isMobileSafari) {
            const androidView = document.getElementById('androidInstaller');
            const androidBtn = document.getElementById('androidInstallerBtn');
            const androidClose = document.getElementById('androidInstallerClose');

            if (androidView) {
                androidView.classList.remove('d-none', 'm-2', 'py-1');
                androidView.classList.add('d-flex', 'm-2', 'py-1');
            }
            if (androidClose) {
                androidClose.addEventListener('click', (event) => {
                    event.preventDefault();
                    androidView.classList.add('d-none');
                    androidView.classList.remove('d-flex', 'm-2', 'py-1');
                })
            }
            if (androidBtn) {
                androidBtn.addEventListener('click', (event) => {
                    event.preventDefault();
                    if (installPromptEvent) {
                        installPromptEvent.prompt();
                    }
                })
            }

            if (installPromptEvent) {
                installPromptEvent.userChoice
                    .then((choiceResult) => {
                        if (choiceResult.outcome === 'accepted') {
                            console.log('User accepted the A2HS prompt');
                            androidView.classList.add('d-none');
                            androidView.classList.remove('d-flex', 'm-2', 'py-1');
                        } else {
                            console.log('User dismissed the A2HS prompt');
                            androidView.classList.add('d-none');
                            androidView.classList.remove('d-flex', 'm-2', 'py-1');
                        }
                        // deferredPrompt = null;
                    });
            }

        }
    };

    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <GuestRoute exact path="/" component={HomePage}/>
                        <Route exact path="/requests" component={RequestPage}/>
                        <AppRoute exact path="/dashboard" component={Dashboard}/>
                        <AppRoute exact path="/dashboard/order/:id" component={SingleOrder}/>
                        <AppRoute exact path="/dashboard/freight" component={DashFreight}/>
                        <AppRoute exact path="/dashboard/lpg" component={DashLpg}/>
                        <AppRoute exact path="/dashboard/gas" component={DashGas}/>
                        <AppRoute exact path="/dashboard/diesel" component={DashDiesel}/>
                        <AppRoute exact path="/profile" component={Profile}/>
                        <GuestRoute exact path="/diesel" component={Diesel}/>
                        <GuestRoute exact path="/lpg" component={Lpg}/>
                        <GuestRoute exact path="/gas" component={Gas}/>
                        <GuestRoute exact path="/freight" component={Freight}/>
                        <GuestRoute exact path="/password/reset" component={Forget}/>
                        <GuestRoute exact path="/login" component={Login}/>
                        <GuestRoute exact path="/password/forgot" component={Forget}/>
                        <GuestRoute exact path="/password/reset/:email/:token" component={Reset}/>
                        <GuestRoute exact path="/new-user" component={NewUser}/>
                        <GuestRoute exact path="/terms" component={Terms}/>
                        <GuestRoute exact path="/privacy" component={Privacy}/>
                        <GuestRoute exact path="/support" component={Contact}/>
                        <Route exact path="/logout" component={Logout}/>
                        <Route path="*" component={_404}/>
                        <Redirect to="/"/>
                    </Switch>
                </BrowserRouter>

            </div>

        )
    }
}

function App() {
    return (
        <Provider store={store}>
            <>
                <ToastContainer/>
                <Router/>
            </>
        </Provider>
    );
}

export default App;
