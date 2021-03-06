import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import StoreReducer from './store_reducer';
import ProductReducer from './product_reducer';
import CartReducer from './cart_reducer';
import OrderReducer from './order_reducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  store: StoreReducer,
  product: ProductReducer,
  cart: CartReducer,
  order: OrderReducer
});

export default rootReducer;