import {createBrowserHistory,} from 'history'
import {isNull} from './index';
import {persistor} from "../store";

const history = createBrowserHistory();

class Auth {

    login(token = '') {
        localStorage.zxcvbnm = token;
        return localStorage.hsjvajhhjs = 'ressortiriugnxoshxvvyewmmaokanabaa';
    }

    logout() {
        localStorage.hsjvajhhjs = null;
        localStorage.zxcvbnm = null;
        history.replace('/login')
        persistor.purge();
    }

    isAuthenticated() {
        return (localStorage.hsjvajhhjs === 'ressortiriugnxoshxvvyewmmaokanabaa') && (!isNull(localStorage.zxcvbnm));
    }

    getStoredToken() {
        return localStorage.zxcvbnm;
    }
}

export default new Auth();
