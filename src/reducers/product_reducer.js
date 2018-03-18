import { FETCH_PRODUCTS_BY_STORES } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_BY_STORES:
            console.log(action)
            return { ...state, productList: action.payload };
    }

    return state;
}