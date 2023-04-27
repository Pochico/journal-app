// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyDNgaVCTZumutSeH_F6ABlKtwRwjwkZNAU',
    authDomain: 'react-cursos-5bdec.firebaseapp.com',
    projectId: 'react-cursos-5bdec',
    storageBucket: 'react-cursos-5bdec.appspot.com',
    messagingSenderId: '85417776799',
    appId: '1:85417776799:web:10a21faae40c9ae4c8b4aa',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
