import axios from 'axios/index'
import store from '../store/index'
import {SERVER} from "./EndPoints";

const baseURL = SERVER;

/**
 * Configure axios to automatically add baseUrl and authorization to needed api request
 */
let TOKEN = '';
export default (tkn) => {
    const token = tkn || store.getState().Auth.token;
    if (token) {
        TOKEN = token;
        return axios.create({
            baseURL,
            headers: {Authorization: `Bearer ${token}`}
        })
    } else return axios.create({baseURL})
}

export const token = TOKEN;
