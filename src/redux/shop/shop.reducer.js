import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMsg: undefined
};

const shopReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case ShopActionTypes.fetchCollectionsStart:
            return {
                ...state,
                isFetching: true
            };
        case ShopActionTypes.fetchCollectionsSuccess:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            };
        case ShopActionTypes.fetchCollectionsFailure:
            return {
                ...state,
                isFetching: false,
                errorMsg: action.payload
            }
        default:
            return state
    }
};

export default shopReducer;