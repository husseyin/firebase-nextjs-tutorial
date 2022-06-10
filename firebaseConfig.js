import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGwmgklMqN74DRSqPXZ1xa-kkIxqEPhms",
  authDomain: "fir-nextjs-tutorial.firebaseapp.com",
  projectId: "fir-nextjs-tutorial",
  storageBucket: "fir-nextjs-tutorial.appspot.com",
  messagingSenderId: "874718079173",
  appId: "1:874718079173:web:5410b60951835aab8fa8ac",
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
