import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDOWz6I_z_Y-Qiiv8pmCRPt8dRbmj4x_3A",
    authDomain: "fenixstore-9a091.firebaseapp.com",
    projectId: "fenixstore-9a091",
    storageBucket: "fenixstore-9a091.appspot.com",
    messagingSenderId: "1040038537273",
    appId: "1:1040038537273:web:0448935695f276764e45e8"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);