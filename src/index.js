import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { AUTH_USER } from './actions/types';
import logMiddleware from './middleware/log';
import apiMiddleware from './middleware/api';
import throttledMiddleware from './middleware/throttled';

import './style.css';

// dev tools middleware
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

let store = createStore(reducers, 
                            compose(applyMiddleware(logMiddleware, throttledMiddleware, 
                                                            apiMiddleware, reduxThunk), reduxDevTools));

const token = localStorage.getItem('token');

// If we have a token, consider the user to be signed in
if (token) {
    // We need update the application state
    store.dispatch({ type: AUTH_USER });
}

const Root = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();