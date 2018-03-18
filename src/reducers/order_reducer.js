import { PLACE_NEW_ORDER } from '../actions/types';

export default (state = { items: [] }, action) => {
    switch (action.type) {
        case PLACE_NEW_ORDER:
            return { ...state, items: [...state.items, action.payload] }
    }

    return state;
}