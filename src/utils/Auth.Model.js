import {createBrowserHistory,} from 'history'
import store, {persistor,} from "../store";

const history = createBrowserHistory();

class Auth {

    login(token = '') {
        localStorage.setItem('ressottirtoknizer', token);
        return localStorage.setItem('ressottirtoknizerstructure', 'ressortiriugnxoshxvvyewmmaokanabaa');
    }

    logout() {
        localStorage.setItem('ressottirtoknizerstructure', null);
        localStorage.setItem('ressottirtoknizer', null);
        history.replace('/login')
        persistor.purge();
    }

    isAuthenticated() {
        return store.getState().Auth ? store.getState().Auth.isLoggenin : false // (localStorage.getItem('ressottirtoknizerstructure') === 'ressortiriugnxoshxvvyewmmaokanabaa') && (!isNull(localStorage.getItem('ressottirtoknizer')));
    }

    getStoredToken() {
        return localStorage.getItem('ressottirtoknizer');
    }
}

export default new Auth();
