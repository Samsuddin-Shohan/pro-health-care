import axios from 'axios';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import firebaseInitialization from '../firebase/firebase.int';

firebaseInitialization();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const emailSignIn = (email, password) => {
    axios
      .get(`http://localhost:7000/user/${email}`)
      .then((res) => setUser(res.data))
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, []);
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        setError(error);
      });
  };
  return {
    user,
    error,
    logOut,
    googleSignIn,
    emailSignIn,
  };
};
export default useFirebase;
