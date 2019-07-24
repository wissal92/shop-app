import { cartActionTypes } from './cart.types';

export const toggleCartHidden = () =>({
    type: cartActionTypes.toggleCartHidden
});

export const addItem = item =>({
    type: cartActionTypes.addItem,
    payload: item
});

export const removeItem = item =>({
    type: cartActionTypes.removeItem,
    payload: item
});

export const clearItemFromCart = item => ({
    type: cartActionTypes.clearItemFromCart,
    payload: item
});