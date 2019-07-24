import {cartActionTypes} from './cart.types';
import {addItemToCart} from './cart.utils';
import {removeItemFromCart} from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){

        case cartActionTypes.toggleCartHidden:
            return {
                ...state,
                hidden: !state.hidden
            };

        case cartActionTypes.addItem:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };

        case cartActionTypes.removeItem:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            };
        
        case cartActionTypes.clearItemFromCart:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            };

        default:
            return state;
    }
}

export default cartReducer;