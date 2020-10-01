import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import './assets/scss/main.scss';
import store from "./store";
import { GuestRoute } from "./components/AppRoute";
import Login from "./pages/Login";
import _404 from "./pages/_404";
import HomePage from "./pages/Home";
import RequestPage from "./pages/RequestPage";
import AddToHomescreen from 'react-add-to-homescreen';
import Diesel from './pages/Diesel';
import Lpg from './pages/Lpg';
import Freight from './pages/Freight';
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import DashFreight from "./pages/dashboard/Freight";
import DashLpg from "./pages/dashboard/Lpg";
import DashDiesel from "./pages/dashboard/Diesel";
import SingleOrder from "./pages/Single";

class AppRouter extends Component {
    handleAddToHomescreenClick = () => {
        alert(`
          1. Open Share menu
          2. Tap on "Add to Home Screen" button`);
    };
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <GuestRoute exact path="/" component={HomePage} />
                        <Route exact path="/requests" component={RequestPage} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/dashboard/order/:id" component={SingleOrder} />
                        <Route exact path="/dashboard/freight" component={DashFreight} />
                        <Route exact path="/dashboard/lpg" component={DashLpg} />
                        <Route exact path="/dashboard/diesel" component={DashDiesel} />
                        <Route exact path="/profile" component={Profile} />
                        <GuestRoute exact path="/diesel" component={Diesel} />
                        <GuestRoute exact path="/lpg" component={Lpg} />
                        <GuestRoute exact path="/freight" component={Freight} />
                        <GuestRoute exact path="/login" component={Login} />
                        <Route path="*" component={_404} />
                        <Redirect to="/" />
                    </Switch>
                </BrowserRouter>
                <AddToHomescreen  onAddToHomescreenClick={this.handleAddToHomescreenClick}/>
            </div>
        )
    }
}

function App() {
    return (
        <Provider store={store}>
            <>
                <ToastContainer />
                <AppRouter/>
            </>
        </Provider>
    );
}

export default App;
