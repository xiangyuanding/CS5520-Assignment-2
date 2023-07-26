// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {
apiKey,
authDomain,
projectId,
storageBucket,
messagingSenderId,
appId} from "@env"
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId
};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);