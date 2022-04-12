// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyARTAJk69030s-Ucnc2ZSPSMZyDSReioZY",
    authDomain: "genius-car-services-f9b3e.firebaseapp.com",
    projectId: "genius-car-services-f9b3e",
    storageBucket: "genius-car-services-f9b3e.appspot.com",
    messagingSenderId: "935979312459",
    appId: "1:935979312459:web:c811890a1fe4d026f574ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;