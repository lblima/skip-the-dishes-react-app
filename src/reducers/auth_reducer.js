import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case AUTH_USER:
            // return Object.assign({}, state, { authenticated: true });
            return { ...state, error: '', authenticated: true };
        case  UNAUTH_USER:
            // return Object.assign({}, state, { authenticated: false });
            return { ...state, authenticated: false };
        case  AUTH_ERROR:
            // return Object.assign({}, state, { error: action.payload });
            return { ...state, error: action.payload };
    }

    return state;
}