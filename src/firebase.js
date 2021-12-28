// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD_qbTQ5Sxe3nDfZRsLuM0DeavUx3Bl-l0",
    authDomain: "bert-81c5d.firebaseapp.com",
    databaseURL: "https://bert-81c5d-default-rtdb.firebaseio.com",
    projectId: "bert-81c5d",
    storageBucket: "bert-81c5d.appspot.com",
    messagingSenderId: "99648775307",
    appId: "1:99648775307:web:e0544c5f4a656a47bc608e",
    measurementId: "G-3FS3J5Y698"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;