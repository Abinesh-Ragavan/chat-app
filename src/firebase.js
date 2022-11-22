
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAemuP5vWDIujhv3B0yTu46Tb-KCNXhqOg",
  authDomain: "chat-cec53.firebaseapp.com",
  projectId: "chat-cec53",
  storageBucket: "chat-cec53.appspot.com",
  messagingSenderId: "991953497835",
  appId: "1:991953497835:web:b7d6138df6602692aa98ae",
  
};


export const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const storage = getStorage();
export const db=getFirestore();

