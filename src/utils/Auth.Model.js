import store from "../store";
import {isNull} from "./helper";

class Auth {
    isAuthenticated() {
        return window.localStorage ? !isNull(window.localStorage.getItem('ressortir-token')) :
            store.getState().Auth ? store.getState().Auth.isLoggedin === true : false
    }
}

export default new Auth();
