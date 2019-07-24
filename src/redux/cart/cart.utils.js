export const addItemToCart = (cartItems, newItem) =>{
    const isItemExist = cartItems.find(cartItem => cartItem.id === newItem.id);

    if(isItemExist){
        return cartItems.map(cartItem =>cartItem.id === newItem.id 
            ? {...cartItem, quantity: cartItem.quantity + 1} 
            : cartItem
        )
    }

    return [...cartItems, {...newItem, quantity: 1}]
}

export const removeItemFromCart = (cartItems, itemToRemove) =>{
    const isItemExist = cartItems.find(cartItem => cartItem.id === itemToRemove.id);

    if(isItemExist.quantity === 1){
        return cartItems.filter(cartItem => cartItem.id !== itemToRemove.id);
    }

    return cartItems.map(cartItem =>
        cartItem.id === itemToRemove.id
        ? {...cartItem, quantity: cartItem.quantity -1}
        : cartItem
    );
};