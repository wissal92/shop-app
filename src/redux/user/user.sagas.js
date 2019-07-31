import {takeLatest, put, all, call} from 'redux-saga/effects';
import UserActionTypes from './user.types';
import {auth, googleProvider, createUserProfileDocument, getCurrentUser} from '../../firebase/firebase.utils';
import {signInSuccess, signInFailure, signOutSuccess, signOutFailure, signUpSuccess, signUpFailure} from './user.actions';

export function* getSnapshotFromUserAuth(userAuth, additionalData){
    try{
        const useRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield useRef.get();
        yield put(signInSuccess({id: userSnapshot.id, ...userSnapshot.data()}))
    }catch(err){
        yield put(signInFailure(err));
    }
}
export function* signInWithGoogle(){
    try{
        const {user} = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user)
    }catch(err){
        yield put(signInFailure(err));
    }
};

export function* signInWithEmail({payload: {email, password}}){
    try{
        const {user} = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);
    }catch(err){
        yield put(signInFailure(err));
    }
};

export function*  isUserAuthenticated(){
    try {
          const userAuth = yield getCurrentUser();
          if(!userAuth) return;
          yield getSnapshotFromUserAuth(userAuth);
    } catch(err) {
         yield put(signInFailure(err))
    }
};

export function* signUp({payload: {email, password, displayName}}){
    try {
        const {user} = yield auth.createUserWithEmailAndPassword(email, password);
        yield put(signUpSuccess({user, additionalData: {displayName}}));
    }catch(err){
        yield put(signUpFailure(err))
    }
};

export function* signInAfterSignUp({payload: {user, additionalData}}){
    yield getSnapshotFromUserAuth(user, additionalData)
}

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.googleSignInStart, signInWithGoogle)
}

export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.emailSignInStart, signInWithEmail)
}

export function* onSignUpStart(){
    yield takeLatest(UserActionTypes.signUpStart, signUp)
}

export function* onSignUpSuccess(){
   yield takeLatest(UserActionTypes.signUpSuccess, signInAfterSignUp)
}

export function* onCheckUserSession(){
    yield takeLatest(UserActionTypes.checkUserSession, isUserAuthenticated)
}

export function* signOut(){
    try {
        yield auth.signOut();
        yield put(signOutSuccess())
    } catch(err) {
       yield put(signOutFailure(err))
    } 
}

export function* onSignOutStart(){
    yield takeLatest(UserActionTypes.signOutStart, signOut)
}

export function* userSagas(){
    yield all([
        call(onGoogleSignInStart), 
        call(onEmailSignInStart), 
        call(onCheckUserSession), 
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ]);
}