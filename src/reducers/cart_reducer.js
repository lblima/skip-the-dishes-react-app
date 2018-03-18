import { ADD_TO_CART } from '../actions/types';

export default (state = { items: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, storeId: action.payload.storeId, items: [...state.items, action.payload] }
    }

    return state;
}