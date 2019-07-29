import ShopActionTypes from './shop.types';

export const updateCollections = collectionsMap => ({
    type: ShopActionTypes.updateCollections,
    payload: collectionsMap
})