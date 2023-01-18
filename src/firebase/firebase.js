// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgLanvrvCh-oiRf5nMj6bLLDv1flmEezY",
  authDomain: "control-pacientes-vue.firebaseapp.com",
  projectId: "control-pacientes-vue",
  storageBucket: "control-pacientes-vue.appspot.com",
  messagingSenderId: "995888560307",
  appId: "1:995888560307:web:4fd5464b9bc8bd4ef7d8c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}