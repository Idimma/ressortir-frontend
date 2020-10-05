import store from "../store";

class Auth {
    isAuthenticated() {
        return store.getState().Auth ? store.getState().Auth.isLoggedin ===  true : false
    }
}

export default new Auth();
