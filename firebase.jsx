
import { createContext, useContext, useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC1Ug7Rn3Z59PvOHIsJSnv0j6IB6mV5IiQ",
  authDomain: "login-ef1f9.firebaseapp.com",
  projectId: "login-ef1f9",
  storageBucket: "login-ef1f9.appspot.com",
  messagingSenderId: "560306894862",
  appId: "1:560306894862:web:3a9ef32b7b21cc2d5be45f",
  databaseURL:" https://login-ef1f9-default-rtdb.firebaseio.com"

};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  const signupUserWithEmailAndPassword = async (name, lastname, email, password) => {
    try {
      const authUserCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
      const uid = authUserCredential.user.uid;

      // Store user data in Firestore
      const userData = {
        uid,
        name,
        lastname,
        email,
        timestamp: Timestamp.now(),
      };

      await addDoc(collection(firestore, 'users'), userData);

      return authUserCredential.user;
    } catch (error) {
      throw error;
    }
  };

  const isLoggedIn = !!user;

  return (
    <FirebaseContext.Provider value={{ signupUserWithEmailAndPassword, isLoggedIn }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

