import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyCe0cyxzGxZVJaILE5eYJ0BEyFvYcxzfZs",
  authDomain: "gardener-8cc2b.firebaseapp.com",
  databaseURL: "https://gardener-8cc2b-default-rtdb.firebaseio.com",
  projectId: "gardener-8cc2b",
  storageBucket: "gardener-8cc2b.appspot.com",
  messagingSenderId: "603687837017",
  appId: "1:603687837017:web:9781346cd8bcccd3314048",
  databaseURL: 'https://gardener-8cc2b-default-rtdb.firebaseio.com/',
};

// Initialize firebase app.
const app = initializeApp(firebaseConfig);

// Initialize firebase database and get the reference of firebase database object.
const database = getDatabase(app);