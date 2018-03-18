import axios from 'axios';
import { API } from '../actions/types';

export default ({ getState, dispatch }) => next => action => {

    if (!action || action.type !== API)
        return next(action);

    const { meta: { url, method, data, callback, error, contentType }} = action;
    const token = localStorage.getItem('token');

    if (token)
        axios.defaults.headers.common['Authorization'] = 'bearer ' + token;

    if (contentType) {
        console.log( axios.defaults.headers);
        axios.defaults.headers.common['Content-Type'] = contentType;
    }

    axios({
        method: method,
        url: url,
        data: (data ? data : null)
    })
    .then(response => {
        console.log(response);
        dispatch(callback(response.data));
    })
    .catch(ex => {
        console.log(ex);
        dispatch(error(ex.response.data));
    });
    
    next(action);
}