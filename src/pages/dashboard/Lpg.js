import React, {Component} from 'react';
import Layout from "../../components/Layout";
import {isMobile} from 'react-device-detect';
import {Formik} from "formik";
import {DetailsForm, FormField, FormSelect} from "../../components/FormElements";
import * as Yup from "yup";
import {AppService} from "../../services";
import {catchError} from "../../utils";
import {Spinner} from "reactstrap";
import {connect} from "react-redux";
import * as SweetAlert from "sweetalert2";


class DashLpg extends Component {
    state = {
        showProfile: false
    }
    goBack = () => {
        if (this.state.showProfile) {
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
                                service: 'lpg', goods_type: '', goods_size: '',
                            }}
                            validationSchema={Yup.object().shape({
                                phone: Yup.string().min(9, 'Phone number is too short').required('Phone number is required'),
                                delivery_address: Yup.string().required('Delivery address is required'),
                                quantity: Yup.string().required('Quantity is required'),
                                name: Yup.string().min(3, 'Name is too short').required('Name is required'),
                            })}
                            enableReinitialize
                            onSubmit={(values, actions) => {
                                AppService.createOrder(values).then(() => {
                                    SweetAlert.fire('Success', 'Order Created Successfully', 'success');
                                    this.props.history.replace('/dashboard')
                                }).catch(catchError).finally(() => {
                                    actions.setSubmitting(false);
                                });
                            }}
                        >
                            {({handleSubmit, isSubmitting}) => (
                                <form onSubmit={handleSubmit} className="request-quote-form">
                                    <DetailsForm
                                        hideProfile={showProfile} service="lpg"
                                        onClick={() => this.setState({showProfile: true})}
                                    />
                                    <div style={{display: showProfile ? 'block' : 'none'}}>
                                        <div className="row mb-10">
                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                                <div className="request-title">
                                                    <h2>lpg Request Specification</h2>
                                                    <small className="d-block mt-10 mb-20">* Kindly note that the
                                                        Minimum Quantity of lpg that can be requested
                                                        is <strong>1000Litres</strong></small>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                                <FormSelect name="quantity" id="quantity">
                                                    <option value="">Select Quantity</option>
                                                    <option value="2.0 tons">2.0 tons</option>
                                                    <option value="2.5 tons">2.5 tons</option>
                                                      <option value="5 tons">5 tons</option>
                                                    <option value="10 tons">10 tons</option>
                                                </FormSelect>
                                            </div>
                                        </div>
                                        <div className="row mb-10">
                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                                <div className="request-title mb-30">
                                                    <h2 className="fs-16">Delivery Location</h2>
                                                </div>

                                            </div>
                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                                <div className="form-group">
                                                    <FormField type="text" className="form-control "
                                                               name="delivery_address"
                                                               placeholder="Full Delivery Address"/>
                                                </div>
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

export default connect(({Auth, User}) => ({user: User, auth: Auth}))(DashLpg)
