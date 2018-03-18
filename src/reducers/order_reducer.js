import { PLACE_NEW_ORDER, FETCH_ORDERS, PLACE_NEW_ORDER_ERROR } from '../actions/types';

export default (state = { orderList: [] }, action) => {
    switch (action.type) {
        case FETCH_ORDERS:
            return { ...state, orderList: [...state.orderList, action.payload] }
        // case PLACE_NEW_ORDER:
        //     return { ...state, orderList: [...state.orderList, action.payload] }
        case PLACE_NEW_ORDER_ERROR:
            return { ...state, error: action.payload }
    }

    return state;
}