import React, {Component} from 'react';
import Layout from "../../components/Layout";
import {isMobile} from 'react-device-detect';
import {Formik} from "formik";
import {DetailsForm, FormField} from "../../components/FormElements";
import * as Yup from "yup";
import {AppService} from "../../services";
import {catchError} from "../../utils";
import {connect} from "react-redux";
import {toast} from "react-toastify";
import {Spinner} from "reactstrap";

class DashFreight extends Component {
    state = {
        showProfile: false
    };

    goBack =() =>{
        if(this.state.showProfile){
            return this.setState({showProfile: false})
        }
        this.props.history.goBack();
    };

    render() {
        const {showProfile} = this.state;
        const {user: {name, email, phone}} = this.props;

        return (
            <Layout onBack={this.goBack} noFooter={isMobile} padded={isMobile} title="Request Freight">
                <div className=" col-12 col-md-10 dash-section__col">
                    <div className="dash-section__content">
                        <Formik
                            initialValues={{
                                phone, quantity: 0, name, delivery_address: '', email,
                                service: 'freight', goods_type: '', goods_size: '',
                            }}
                            validationSchema={Yup.object().shape({
                                phone: Yup.string().min(9, 'Phone number is too short').required('Phone number is required'),
                                delivery_address: Yup.string().required('Email is required'),
                                quantity: Yup.string().required('Email is required'),
                                name: Yup.string().min(3, 'Name is too short').required('Name is required'),
                            })}
                            enableReinitialize
                            onSubmit={(values, actions) => {
                                AppService.createOrder(values).then(() => {
                                    toast.success('Order Created Successfully');
                                    this.props.history.replace('/dashboard')
                                }).catch(catchError).finally(() => {
                                    actions.setSubmitting(false);
                                });
                            }}
                        >
                            {({handleSubmit, isSubmitting}) => (
                                <form onSubmit={handleSubmit} className="request-quote-form mb-50">
                                    <DetailsForm
                                        hideProfile={showProfile} service="freight"
                                        onClick={() => this.setState({showProfile: true})}
                                    />

                                    <div style={{display: showProfile ? 'block' : 'none'}}>
                                        <div className="row mb-10">
                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                                <div className="request-title">
                                                    <h2>Freight Request Specification</h2>
                                                    <small className="d-block mt-10 mb-20">* Kindly note that the
                                                        Minimum Size of goods is between <strong>9-10 tons</strong>
                                                        per truck load
                                                    </small>
                                                </div>

                                            </div>
                                            <div className="col-sm-12 col-md-6">
                                                <FormField type="text" name="goods_type" placeholder="Type of Goods"/>
                                            </div>

                                            <div className="col-sm-12 col-md-6">
                                                <FormField type="text" name="goods_size" placeholder="Size of Goods"/>
                                            </div>
                                        </div>
                                        <div className="row mb-10">
                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                                <div className="request-title mb-30">
                                                    <h2>Pick up and Delivery Location</h2>
                                                </div>

                                            </div>
                                            <div className="col-sm-12 col-md-12">
                                                <FormField
                                                    type="text" name="pickup_address"
                                                    placeholder="Full Pick up Address"/>
                                            </div>
                                            <div className="col-sm-12 col-md-12">
                                                <FormField
                                                    type="text"
                                                    name="delivery_address"
                                                    placeholder="Full Delivery Address"/>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                                                <button type="submit" className="btn btn__primary">
                                                    {isSubmitting ? <Spinner/> : 'Continue Request'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            )}
                        </Formik>
                    </div>
                </div>

            </Layout>
        )
    }
}

export default connect(({Auth, User}) => ({user: User, auth: Auth}))(DashFreight)
