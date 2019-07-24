import { cartActionTypes } from './cart.types';

export const toggleCartHidden = () =>({
    type: cartActionTypes.toggleCartHidden
});

export const addItem = item =>({
    type: cartActionTypes.addItem,
    payload: item
});