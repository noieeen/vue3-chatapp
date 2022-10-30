import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import {ref,onMounted,computed} from 'vue'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRJuIlt4nEhFKubEXQFMBX3_-KRwK7ZwY",
  authDomain: "chatapp-vue3.firebaseapp.com",
  databaseURL: "https://chatapp-vue3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "chatapp-vue3",
  storageBucket: "chatapp-vue3.appspot.com",
  messagingSenderId: "870974335592",
  appId: "1:870974335592:web:258b5ec07ee08b5a4e29dd",
  measurementId: "G-ETDYD83XWG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);