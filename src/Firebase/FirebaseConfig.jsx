import { initializeApp } from "firebase/app";
import { createContext, useContext } from "react";
import { getDatabase, set, ref } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCe0cyxzGxZVJaILE5eYJ0BEyFvYcxzfZs",
    authDomain: "gardener-8cc2b.firebaseapp.com",
    databaseURL: "https://gardener-8cc2b-default-rtdb.firebaseio.com",
    projectId: "gardener-8cc2b",
    storageBucket: "gardener-8cc2b.appspot.com",
    messagingSenderId: "603687837017",
    appId: "1:603687837017:web:9781346cd8bcccd3314048",
    databaseURL: "https://gardener-8cc2b-default-rtdb.firebaseio.com/",
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

// Create a context for Firebase
const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {

  const signupUserwithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const putData = (key, data) => set(ref(database, key), data);

  return (
    <FirebaseContext.Provider value={{ signupUserwithEmailAndPassword, putData }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContext;