// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { /* connectFirestoreEmulator, */ getFirestore } from 'firebase/firestore';
import { /* connectStorageEmulator, */ getStorage } from 'firebase/storage';
// import { isDev } from '../isDev';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCARRqFCBnLxtQ5illFzh_cufCscLH9_R4",
    authDomain: "miniext-challenge-b883d.firebaseapp.com",
    projectId: "miniext-challenge-b883d",
    storageBucket: "miniext-challenge-b883d.appspot.com",
    messagingSenderId: "890902633256",
    appId: "1:890902633256:web:c7cf08aacc36d1c7390e1d",
    measurementId: "G-YC8LRR6MZH"
  };

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const firestore = getFirestore(firebaseApp);
export const baseBucketName = 'miniext-challenge-b883d.appspot.com';

/* if (isDev) {
    connectFirestoreEmulator(firestore, '127.0.0.1', 8081);
} */
