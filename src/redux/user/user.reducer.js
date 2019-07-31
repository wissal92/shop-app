import UserActionTypes from './user.types';

const INITIAL_STATE = { currentUser: null, err: null};

const userReducer = (state=INITIAL_STATE, action) =>{
    switch(action.type){
        case UserActionTypes.signInSuccess:
            return {
                ...state,
                currentUser: action.payload,
                err: null
            };
        case UserActionTypes.signOutSuccess:
            return {
                ...state,
                currentUser: null,
                err: null
            }
        case UserActionTypes.signInFailure:
        case UserActionTypes.signOutFailure:
        case UserActionTypes.signUpFailure:
            return {
                ...state,
                err: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;