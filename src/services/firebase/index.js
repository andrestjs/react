
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBX_SC8cQ-I-sE9Dui8B64jkOX2WzD6cBY",
    authDomain: "coderhouse-ecommerce-a6a94.firebaseapp.com",
    projectId: "coderhouse-ecommerce-a6a94",
    storageBucket: "coderhouse-ecommerce-a6a94.appspot.com",
    messagingSenderId: "928107512550",
    appId: "1:928107512550:web:52ea84b7e013d44aeff127"
  };
  
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);