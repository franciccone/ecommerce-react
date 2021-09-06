import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAd1pKhNKyhtkM3Bl0U1KBZRUK-t8Jvz4I",
    authDomain: "ecommerce-tourism.firebaseapp.com",
    projectId: "ecommerce-tourism",
    storageBucket: "ecommerce-tourism.appspot.com",
    messagingSenderId: "677410416976",
    appId: "1:677410416976:web:436214a8aab44050226455"
};

const app = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => {
    return app
};

export const getFirestore = () => {
    return firebase.firestore(app)
};