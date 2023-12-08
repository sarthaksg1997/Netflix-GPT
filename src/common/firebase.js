import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCW12_ePOHohdPhD4tdQfwaZ8c7VSNn-JA",
  authDomain: "netflix-gpt-d155d.firebaseapp.com",
  projectId: "netflix-gpt-d155d",
  storageBucket: "netflix-gpt-d155d.appspot.com",
  messagingSenderId: "311455949358",
  appId: "1:311455949358:web:29c6dad65a141767f075bf",
  measurementId: "G-QBZXLCFJM8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// export const googleProvider = new GoogleAuthProvider();
