import { ADD_TO_CART, PLACE_NEW_ORDER, API } from './types';

const ROOT_URL = 'http://api-vanhack-event-sp.azurewebsites.net/api/v1';

export function addToCart(newItem) {
    return {
        type: ADD_TO_CART,
        payload: newItem
    }
}

export function placeNewOrder(newOrder) {
    return {
        type: PLACE_NEW_ORDER,
        payload: newOrder
    }

    return {
        type: API,
        meta: {
            url: `${ROOT_URL}/Order/`,
            method: 'POST',
            throttle: 2000,
            callback: (data) => ({
                type: PLACE_NEW_ORDER,
                payload: data
            })
        }
    }
}