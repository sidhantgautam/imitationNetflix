import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyCHFpIvpwWBo0pl0jZFnWp5XUMiRisoLxM",
  authDomain: "react-netflix-clone-9bdfe.firebaseapp.com",
  projectId: "react-netflix-clone-9bdfe",
  storageBucket: "react-netflix-clone-9bdfe.appspot.com",
  messagingSenderId: "147433756304",
  appId: "1:147433756304:web:52192a0bd2f17c31ff2a15",
  measurementId: "G-C2QBVR2KV7"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
