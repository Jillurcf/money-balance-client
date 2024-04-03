// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi8UbVrztBDI1tc-VhzXVl8nNUK7UKtbU",
  authDomain: "coffee-store-94ce7.firebaseapp.com",
  projectId: "coffee-store-94ce7",
  storageBucket: "coffee-store-94ce7.appspot.com",
  messagingSenderId: "645548039734",
  appId: "1:645548039734:web:e67bb593980bd376dd8297"
};

const app = initializeApp(firebaseConfig);

export default app;