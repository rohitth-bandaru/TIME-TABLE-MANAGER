// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-E19dEvWDGrooU4qRrj_nlMUO5Uq5Cag",
  authDomain: "time-table-manager-9b80c.firebaseapp.com",
  projectId: "time-table-manager-9b80c",
  storageBucket: "time-table-manager-9b80c.appspot.com",
  messagingSenderId: "132490824740",
  appId: "1:132490824740:web:4d6ccbc19bc7cbecd89cb1",
  measurementId: "G-NMLY4F0Z13",
  databaseURL: "https://time-table-manager-9b80c-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default {
  app,
  database,
};
