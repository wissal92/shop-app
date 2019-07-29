import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAKun2odRbb1eTy6okGirl0qnFmggZ0nTY",
    authDomain: "store-db-f1a72.firebaseapp.com",
    databaseURL: "https://store-db-f1a72.firebaseio.com",
    projectId: "store-db-f1a72",
    storageBucket: "",
    messagingSenderId: "848613937273",
    appId: "1:848613937273:web:b7c6cd5c18ef4069"
  }

  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    
    if(!snapShot.exists){
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({displayName, email, createdAt, ...additionalData})
      } catch(err){
        console.log('there is an error :(', err)
      }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const addCollectionAndDocuments = async (collectionkey, objectsToAdd) =>{
    const collectionRef = firestore.collection(collectionkey);
    console.log(collectionRef);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
      const newDocRef = collectionRef.doc();
      batch.set(newDocRef, obj);
    });

    return await batch.commit();
  }
  
  export const convertCollectionsSnapshotToMap = collections =>{
    const transformedCollection = collections.docs.map(doc =>{
      const {title, items} = doc.data();

      return {
        routeName: encodeURI(title.toLowerCase()),
        id: doc.id,
        title,
        items
      }
    });
    return transformedCollection.reduce((acc, collection) => {
      acc[collection.title.toLowerCase()] = collection;
      return acc;
    }, {})
  }
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;