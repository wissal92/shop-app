import UserActionTypes from './user.types';


export const googleSignInStart = () =>({
    type: UserActionTypes.googleSignInStart
});

export const signInSuccess = user =>({
    type: UserActionTypes.signInSuccess,
    payload: user
});

export const signInFailure = err =>({
    type: UserActionTypes.signInFailure,
    payload: err
});

export const emailSignInStart = (emailAndPassword) =>({
    type: UserActionTypes.emailSignInStart,
    payload: emailAndPassword
});

export const checkUserSession = () =>({
    type: UserActionTypes.checkUserSession
});

export const signOutStart = () =>({
    type: UserActionTypes.signOutStart
});

export const signOutSuccess = () =>({
    type: UserActionTypes.signOutSuccess
});

export const signOutFailure = err =>({
    type: UserActionTypes.signOutFailure,
    payload: err
});

export const signUpStart = userCredential =>({
    type: UserActionTypes.signUpStart,
    payload: userCredential
});

export const signUpSuccess = ({user, additionalData}) =>({
    type: UserActionTypes.signUpSuccess,
    payload: {user, additionalData}
});

export const signUpFailure = err =>({
    type: UserActionTypes.signUpFailure,
    payload: err
});

