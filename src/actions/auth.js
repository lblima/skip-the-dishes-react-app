import { AUTH_USER, UNAUTH_USER, AUTH_ERROR } from './types';
import axios from 'axios';

const ROOT_URL = 'http://api-vanhack-event-sp.azurewebsites.net/api/v1';

// =================================================================
// I am going to use Redux-Thunk insted Redux-Promise or Redux-Saga
// =================================================================

export function signInUser(history, { email, password }) {
    return (dispatch) => {
        // Submit user and password to the server
        axios.post(`${ROOT_URL}/Customer/auth?email=${email}&password=${password}`)
            .then(response => {
                // If request is good ...
                // - Update state to indicate user is authenticated
                dispatch({ type: AUTH_USER });

                // - Save token 
                localStorage.setItem('token', response.data);

                // - Redirect to the route '/stores'
                history.push('/stores');
            })
            .catch((err) => {
                // If request is bad ...
                // - Show an error message
                dispatch(authError('Bad login info'));
            });        
    }
}

export function authError(error) {
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function signOutUser() {

    localStorage.removeItem('token');

    return {
        type: UNAUTH_USER
    }
}

export function signUpUser(history, { email, name, address, password }) {
    return (dispatch) => {
          // Submit user and password to the server
          axios.post(`${ROOT_URL}/Customer`, { email, name, address, password })
          .then(response => {
              // If request is good ...
              // - Update state to indicate user is authenticated
              dispatch({ type: AUTH_USER });

              // - Save token 
              localStorage.setItem('token', response.data);

              // - Redirect to the route '/stores'
              history.push('/stores');
          })
          .catch(err => {
              // If request is bad ...
              // - Show an error message
              const errorMessage = err.response.data.error;
              dispatch(authError(errorMessage));
          });        
    }
}