// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmgCtxy7UddlAQsC25nfaiyKs4RFoW9ZM",
  authDomain: "terceiro-projeto-react.firebaseapp.com",
  projectId: "terceiro-projeto-react",
  storageBucket: "terceiro-projeto-react.appspot.com",
  messagingSenderId: "168565922239",
  appId: "1:168565922239:web:5397c24cafe933edbee90a",
  measurementId: "G-Y3S0VEMYRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);