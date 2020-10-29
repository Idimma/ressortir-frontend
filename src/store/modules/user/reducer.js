import {DETAILS, USER} from './types';


export default function reducer(state = { }, action) {
    switch (action.type) {
        case DETAILS:
            return {...state, userdetail: action.payload};
        case USER:
            return {...state, ...action.payload};
        default:
            return state;
    }
}
