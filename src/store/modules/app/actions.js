import {
    ERROR,
    IS_CONNECTED,
    IS_LOADING,
    NEW_ORDERS,
    SET_REFERER, SHOW_ACCOUNT_UPDATE,
    SHOW_LOADER,
    SHOW_NAV_SETTING, SHOW_OFFER,
    SHOW_TASK
} from './types';
import {toast} from "react-toastify";
import Auth from '../../../utils/Auth.Model'


export const setConnected = isConnected => dispatch => dispatch({type: IS_CONNECTED, payload: isConnected});

export const setLoading = isLoading => dispatch => dispatch({type: IS_LOADING, payload: isLoading});

const setShowLoader = show_loader => dispatch => dispatch({type: SHOW_LOADER, payload: show_loader});

export const setNewOrders = newOrders => dispatch => dispatch({type: NEW_ORDERS, payload: newOrders});

const setNavSetting = state => dispatch => dispatch({type: SHOW_NAV_SETTING, payload: state});

export const openNavSetting = () => dispatch => dispatch(setNavSetting(true));

export const closeNavSetting = () => dispatch => dispatch(setNavSetting(false));

const setReferer = state => dispatch => dispatch({type: SET_REFERER, payload: state});

export const openReferer = () => dispatch => dispatch(setReferer(true));

export const closeReferer = () => dispatch => dispatch(setReferer(false));

export const openLoaderModal = () => dispatch => dispatch(setShowLoader(true));

export const closeLoaderModal = () => dispatch => dispatch(setShowLoader(false));


export const togglePostATask = () => (dispatch, getState) => {
    const {is_verified} = getState().User
    if(Auth.isAuthenticated() && !is_verified){
        return toast.dark('Please verify your email')
    }

    const {showPostTask} = getState().Application;
    dispatch({type: SHOW_TASK, payload: !showPostTask});
};
export const postSimilar = () => (dispatch, getState) => {
    const {is_verified} = getState().User
    if(Auth.isAuthenticated() && !is_verified){
        return toast.dark('Please verify your email')
    }

    const {showPostTask} = getState().Application;
    dispatch({type: SHOW_TASK, payload: !showPostTask});
};

export const toggleOffer = () => (dispatch, getState) => {
    const {is_verified} = getState().User
    if(!is_verified){
        return toast.dark('Please verify your email')
    }

    const {showOffer} = getState().Application;
    dispatch({type: SHOW_OFFER, payload: !showOffer});
};

export const toggleAccountUpdate = () => (dispatch, getState) => {
    const {showAccountUpdate} = getState().Application;
    dispatch({type: SHOW_ACCOUNT_UPDATE, payload: !showAccountUpdate});
};

export const setError = error => dispatch => dispatch({type: ERROR, payload: error});
