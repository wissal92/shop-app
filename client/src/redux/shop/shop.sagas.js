import {takeLatest, call, put, all} from 'redux-saga/effects';
import ShopActionTypes from './shop.types';
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';
import {fetchCollectionsSuccess, fetchCollectionsFailure} from './shop.actions';

export function* fetchCollectionsAsync(){
    yield console.log('I AM FIRED');
    
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    }catch(err){
        yield put(fetchCollectionsFailure(err.message))
    }
};

export function* fetchCollectionsStart(){
    yield takeLatest(ShopActionTypes.fetchCollectionsStart, fetchCollectionsAsync);
};

export function* shopSagas(){
    yield all([call(fetchCollectionsStart)])
}