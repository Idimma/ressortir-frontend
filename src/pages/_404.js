import React, { Component } from "react";
import Layout from "../components/Layout";
import not_found  from "../assets/images/page-not-found-2.png";

class _404 extends Component {
    render() {
        return (
            <Layout>
                <div style={{ paddingTop: 0, paddingBottom: 180, textAlign: 'center' }}>
                    <img src={not_found} alt="404" className="mx-auto col-10 col-sm-7" />
                    <h2 style={{ textTransform: 'uppercase' }}>
                        {this.props.history.location.pathname.replace('/', ' ')} PAGE NOT FOUND
                    </h2>
                </div>
            </Layout>
        );
    }
}

export default _404;
