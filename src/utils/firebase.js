import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBrY4BqgIV4QbLChLTnzYmYvazrmvBI0T8",
    authDomain: "ohmmeter-project.firebaseapp.com",
    databaseURL: "https://ohmmeter-project-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "ohmmeter-project",
    storageBucket: "ohmmeter-project.appspot.com",
    messagingSenderId: "341911444884",
    appId: "1:341911444884:web:c24074dc61bde312e58381"
  };
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;