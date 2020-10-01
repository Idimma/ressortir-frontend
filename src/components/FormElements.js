import React from "react";
import {ErrorMessage, Field} from "formik";
import className from 'classname'

export const FormElements = ({message}) => (<span className="invalid-feedback"><strong>{message}</strong></span>);
export const FormField = (props) => <Field component={CustomInputComponent} {...props} />
export const FormSelect = (props) => <Field component={CustomSelectComponent} {...props} />

const CustomInputComponent = ({ field, form: { touched, errors, isValid }, title, ...props }) => {
    const inputClass = className('form-control', {
        'is-invalid': touched[field.name] && errors[field.name]
    });
    return (
        <div className="form-group">
            {title && <h5 className="form__title">{title}</h5>}
            <input type="text" className={inputClass} {...field} {...props} />
            <ErrorMessage component={FormElements} name={field.name}/>
        </div>
    );
}
const CustomSelectComponent = ({ field, form: { touched, errors, isValid }, title, ...props }) => {
    const inputClass = className('form-control', {
        'is-invalid': touched[field.name] && errors[field.name]
    });
    return (
        <div className="form-group form-group-select">
            {title && <h5 className="form__title">{title}</h5>}
            <select  className={inputClass} {...field} {...props} />
            <ErrorMessage component={FormElements} name={field.name}/>
        </div>
    );
}

export const DetailsForm = ({service}) => <>
    <input type="hidden" name="service" value={service}/>
    <div className="request-title">
        <h2>{service} Request Info</h2>
        <p>Please make sure the details below are correct for this
            particular order </p>
    </div>
    <div className="row mb-10">
        <div className="col-12">
            <div className="form-group">
                <FormField type="text" className="form-control " name="name" placeholder="Full Name"/>
            </div>
        </div>
        <div className="col-12">
            <div className="form-group">
                <FormField type="tel" className="form-control " name="phone" placeholder="Phone Number"/>
            </div>
        </div>
    </div>

    <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12 text-center">
            <button type="submit" className="btn btn__primary">Request a
                Quote
            </button>
        </div>
    </div>
</>;

