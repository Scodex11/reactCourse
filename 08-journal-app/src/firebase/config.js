import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAFtqEjctJLDGXZJujDb1UAmEP0v9xGnR8",
  authDomain: "react-course-c06f6.firebaseapp.com",
  projectId: "react-course-c06f6",
  storageBucket: "react-course-c06f6.appspot.com",
  messagingSenderId: "69402864148",
  appId: "1:69402864148:web:2fa45bd1532ec7a6115501"
};

//Initialization of Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);