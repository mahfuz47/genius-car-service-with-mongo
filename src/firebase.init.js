// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc4r8XKSCxEMvrt1RIH6KGqVqqPY8-YFo",
  authDomain: "genius-car-services-b8581.firebaseapp.com",
  projectId: "genius-car-services-b8581",
  storageBucket: "genius-car-services-b8581.appspot.com",
  messagingSenderId: "272566194276",
  appId: "1:272566194276:web:3ca338603e277c63f84f71",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
