import { FETCH_STORES } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_STORES:
            console.log(action)
            return { ...state, storeList: action.payload };
    }

    return state;
}