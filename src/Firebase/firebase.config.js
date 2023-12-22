// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIIjqQGfQUrpBKDdSZ4Nm_z7xzVrYUYgw",
  authDomain: "job-task-3a57b.firebaseapp.com",
  projectId: "job-task-3a57b",
  storageBucket: "job-task-3a57b.appspot.com",
  messagingSenderId: "706462957083",
  appId: "1:706462957083:web:262b32a18a883d97a482be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
