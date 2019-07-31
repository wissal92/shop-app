import ShopActionTypes from './shop.types';
//import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.fetchCollectionsStart,
});

export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.fetchCollectionsSuccess,
    payload: collectionsMap
});

export const fetchCollectionsFailure = errMsg => ({
    type: ShopActionTypes.fetchCollectionsFailure,
    payload: errMsg
});

// export const fetchCollectionsStartAsync = () =>{
//     return dispatch =>{
       
//         dispatch(fetchCollectionsStart());
     
//         collectionRef
//           .get()
//           .then(snapShot =>{
//             const collectionMap = convertCollectionsSnapshotToMap(snapShot);
//             dispatch(fetchCollectionsSuccess(collectionMap));
//           })
//           .catch(err => dispatch(fetchCollectionsFailure(err.message)))
//     };

// }