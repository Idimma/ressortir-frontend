import React, {Component} from "react";
import {Redirect, Route} from "react-router-dom";
import {toast} from 'react-toastify';
import Auth from "../utils/Auth.Model";
import {connect} from "react-redux";

class _AppRoute extends Component {

    render() {
        let {component: Component, user, ...rest} = this.props;
        return (
            <Route
                {...rest}
                render={props => {
                    if (Auth.isAuthenticated()) {
                        return <Component {...props} />;
                    } else {
                        toast('You are not logged in');
                        return (<Redirect to={{pathname: "/login", state: {from: props.location}}}/>);
                    }
                }}
            />
        );
    }
}

const mapStateToProps = ({Auth, User,}) => {
    return {...Auth, user: User}
};

export const AppRoute = connect(mapStateToProps, {})(_AppRoute);


export const GuestRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (!Auth.isAuthenticated()) {
                    return <Component {...props} />;
                } else {
                    return (<Redirect to={{pathname: "/dashboard", state: {from: props.location}}}/>);
                }
            }}
        />
    );
};
