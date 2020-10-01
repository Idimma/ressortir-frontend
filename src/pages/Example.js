import React, {Component} from 'react';
import Layout from "../components/Layout";
import {isMobile} from 'react-device-detect';


class Dashboard extends Component {
    render() {
        return (
            <Layout noFooter={isMobile} title="Example">


            </Layout>
        )
    }
}

export default Dashboard
