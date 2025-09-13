// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDn_vaVUxNVsDcjA5qH3N_4p1C20XudjUE",
  authDomain: "vertexai-tec.firebaseapp.com",
  projectId: "vertexai-tec",
  storageBucket: "vertexai-tec.appspot.com",
  messagingSenderId: "64815421204",
  appId: "1:64815421204:web:d2b8c1df70eb69e73c1401",
  measurementId: "G-R287F86NDY",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ export these
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
