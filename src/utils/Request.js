import axios from 'axios/index'
import store from '../store/index'
import {SERVER} from "./EndPoints";

const baseURL = SERVER;

/**
 * Configure axios to automatically add baseUrl and authorization to needed api request
 */
let TOKEN = '';
export default (tkn = window.localStorage.getItem('ressortir-token')) => {
    const token = tkn || store.getState().Auth.token;
    try {
        if (token) {
            if (!tkn) {
                window.localStorage.setItem('ressortir-token', token)
            }
            TOKEN = token;
            return axios.create({
                baseURL,
                headers: {Authorization: `Bearer ${token}`}
            })
        } else return axios.create({baseURL})
    }catch (e) {
        return axios.create({baseURL})
    }
}

export const token = TOKEN;
