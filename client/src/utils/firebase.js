
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "ai-interview-agent-c5b67.firebaseapp.com",
  projectId: "ai-interview-agent-c5b67",
  storageBucket: "ai-interview-agent-c5b67.firebasestorage.app",
  messagingSenderId: "635498813365",
  appId: "1:635498813365:web:558707624ba86adac9abfc"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}