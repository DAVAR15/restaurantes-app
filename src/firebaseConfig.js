

import { getFirestore } from 'firebase/firestore'; 
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuKwh-lkxsQPbq0GWcP8FWaZ_ex64NwjU",
  authDomain: "restaurantsapp-25b76.firebaseapp.com",
  projectId: "restaurantsapp-25b76",
  storageBucket: "restaurantsapp-25b76.firebasestorage.app",
  messagingSenderId: "937645403767",
  appId: "1:937645403767:web:8b52d716f801a3ea09a072"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }; 