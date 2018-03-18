import { PLACE_NEW_ORDER, PLACE_NEW_ORDER_ERROR } from '../actions/types';

export default (state = { items: [] }, action) => {
    switch (action.type) {
        case PLACE_NEW_ORDER:
            return { ...state, items: [...state.items, action.payload] }
        case PLACE_NEW_ORDER_ERROR:
            return { ...state, error: action.payload }
    }

    return state;
}