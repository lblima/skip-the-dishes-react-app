import { FETCH_STORES, API } from './types';
import axios from 'axios';

const ROOT_URL = 'http://api-vanhack-event-sp.azurewebsites.net/api/v1';

// ======================================================================================
// I am going to use my own middleware insted of Redux-Thunk, Redux-Promise or Redux-Saga
// ======================================================================================

//Another better aproach is delegate the async api call to middleware, making my action more easy to test
export function fetchStores() {
    return {
        type: API,
        meta: {
            url: `${ROOT_URL}/Store/`,
            method: 'GET',
            throttle: 2000,
            callback: (data) => ({
                type: FETCH_STORES,
                payload: data
            })
        }
    }
}