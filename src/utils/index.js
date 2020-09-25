import auth from './Auth.Model'
import {toast as _toast} from 'react-toastify';
export const toast = _toast;
export const Auth = auth;
export const isNull = (value) => (value === null || value === undefined || value === '' || value === 'null');
export const ReportError = (a, b = 'error') => {
    console.log(b, a);
}
export const Naira = '₦';

export const catchError = (error) => {
    // console.log(error.response);
    if (error.response) {
        const data = error.response.data;
        if (data.errors) {
            const arr = Object.keys(data.errors);
            arr.forEach(e => {
                data.errors[e].forEach(err => toast.error('ERROR: ' + err, {autoClose: 10000}))
            });
            return
        }
        if (data.error) {
            return toast.error('ERROR: ' + data.error, {autoClose: 10000})
        }
    }
    toast.error('ERROR: ' + error.message, {autoClose: 10000})
}
