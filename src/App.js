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
                        <GuestRoute exact path="/requests" component={RequestPage} />
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
