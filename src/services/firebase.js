// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDenQj7c_uOTGh3dOwOkcA0JjdVEDOCnXA",
    authDomain: "ecommerce-trovato.firebaseapp.com",
    projectId: "ecommerce-trovato",
    storageBucket: "ecommerce-trovato.appspot.com",
    messagingSenderId: "462876209639",
    appId: "1:462876209639:web:66374a2f3b9e87f3e70d42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)