// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS2w4YodCYEKjvls0DxfBZPeQlqC_LS9U",
  authDomain: "hello-a56f1.firebaseapp.com",
  projectId: "hello-a56f1",
  storageBucket: "hello-a56f1.appspot.com",
  messagingSenderId: "107775055973",
  appId: "1:107775055973:web:6a3bbec5a00566c5bc0e8c",
  databaseURL: "https://hello-a56f1-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);