import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {createLogger} from 'redux-logger';
import promise from 'redux-promise-middleware';
import {routerMiddleware, routerReducer} from 'react-router-redux'
import {createBrowserHistory} from 'history';
import {persistReducer, persistStore} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import ReduxThunk from 'redux-thunk';
// IMPORT APP REDUCES
import {Auth} from './modules/auth';
import {Application} from './modules/app';
import {User} from './modules/user';


const persistConfig = {key: 'root', storage,}
export const history = createBrowserHistory();
const loggerMiddleware = createLogger();

// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);
const enhancer = compose(applyMiddleware(myRouterMiddleware, promise, ReduxThunk));
const reducers = combineReducers({Auth, Application, User, router: routerReducer});
const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, {}, enhancer);
export const persistor = persistStore(store);
export default store;
