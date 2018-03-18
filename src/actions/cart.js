import { ADD_TO_CART } from './types';
import axios from 'axios';

export function addToCart(newItem) {
    return {
        type: ADD_TO_CART,
        payload: newItem
    }
}