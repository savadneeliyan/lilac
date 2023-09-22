import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDmshY0w2ytcNRdhNJB9GtbpcxP7SW6M2o",
  authDomain: "lilac-database.firebaseapp.com",
  databaseURL:
    "https://lilac-database-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "lilac-database",
  storageBucket: "lilac-database.appspot.com",
  messagingSenderId: "640088367522",
  appId: "1:640088367522:web:90400893da78acaf0552fb",
  measurementId: "G-QCC3Z9G9R4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app)
