import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import './assets/scss/main.scss';
import store from "./store";
import {GuestRoute} from "./components/AppRoute";
import Login from "./pages/Login";
import _404 from "./pages/_404";
import HomePage from "./pages/Home";
import RequestPage from "./pages/RequestPage";
import Diesel from './pages/Diesel';
import Lpg from './pages/Lpg';
import Freight from './pages/Freight';
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import DashFreight from "./pages/dashboard/Freight";
import DashLpg from "./pages/dashboard/Lpg";
import DashDiesel from "./pages/dashboard/Diesel";
import SingleOrder from "./pages/Single";
import {isMobile, isMobileSafari} from "react-device-detect";

let installPromptEvent;

class AppRouter extends Component {
    componentDidMount() {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/sw.js')
                    .then(registration => {
                    })
                    .catch(registrationError => {
                        console.log('SW registration failed: ', registrationError);
                    });
            });
        }
        window.addEventListener('beforeinstallprompt', this.installPrompt);
    }


    installPrompt = (event) => {
        event.preventDefault();
        installPromptEvent = event;
        if (isMobile && !isMobileSafari) {
            const androidView = document.getElementById('androidInstaller');
            const androidBtn = document.getElementById('androidInstallerBtn');
            const androidClose = document.getElementById('androidInstallerClose');

            if (androidView) {
                androidView.classList.remove('d-none',  'm-2', 'py-1');
                androidView.classList.add('d-flex',  'm-2', 'py-1');
            }
            if (androidClose) {
                androidClose.addEventListener('click', (event) => {
                    event.preventDefault();
                    androidView.classList.add('d-none');
                    androidView.classList.remove('d-flex',  'm-2', 'py-1');
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
                            androidView.classList.remove('d-flex',  'm-2', 'py-1');
                        } else {
                            console.log('User dismissed the A2HS prompt');
                            androidView.classList.add('d-none');
                            androidView.classList.remove('d-flex',  'm-2', 'py-1');
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
                        <Route exact path="/dashboard" component={Dashboard}/>
                        <Route exact path="/dashboard/order/:id" component={SingleOrder}/>
                        <Route exact path="/dashboard/freight" component={DashFreight}/>
                        <Route exact path="/dashboard/lpg" component={DashLpg}/>
                        <Route exact path="/dashboard/diesel" component={DashDiesel}/>
                        <Route exact path="/profile" component={Profile}/>
                        <GuestRoute exact path="/diesel" component={Diesel}/>
                        <GuestRoute exact path="/lpg" component={Lpg}/>
                        <GuestRoute exact path="/freight" component={Freight}/>
                        <GuestRoute exact path="/login" component={Login}/>
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
                <AppRouter/>
            </>
        </Provider>
    );
}

export default App;
