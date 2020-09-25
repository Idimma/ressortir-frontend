import {
    ERROR,
    IS_CONNECTED,
    IS_LOADING,
    NEW_ORDERS,
    SET_REFERER,
    SHOW_ACCOUNT_UPDATE,
    SHOW_LOADER,
    SHOW_NAV_SETTING,
    SHOW_OFFER,
    SHOW_TASK,
} from './types';

const initialState = {
    isLoading: false,
    newOrders: [],
    orders: [],
    showLoader: false,
    showNavSetting: false,
    referer: false,
    error: {}, showPostTask: false,
    isConnected: null,
    hasError: false, showAccountUpdate: false, showOffer: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case IS_CONNECTED:
            return {...state, isConnected: action.payload};
        case IS_LOADING:
            return {...state, isLoading: action.payload};
        case NEW_ORDERS:
            return {...state, newOrders: action.payload};
        case SHOW_NAV_SETTING:
            return {...state, showNavSetting: action.payload};
        case ERROR:
            return {...state, error: action.payload};
        case SHOW_LOADER:
            return {...state, showLoader: action.payload};
        case SHOW_TASK:
            return {...state, showPostTask: action.payload};
        case SET_REFERER:
            return {...state, referer: action.payload};
        case SHOW_OFFER:
            return {...state, showOffer: action.payload};
        case SHOW_ACCOUNT_UPDATE:
            return {...state, showAccountUpdate: action.payload};
        default:
            return state;
    }
}
