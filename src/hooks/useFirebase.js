import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { useEffect, useState } from 'react'
import firebaseInitialization from '../firebase/firebase.int'

firebaseInitialization()
const useFirebase = () => {
  const [user, setUser] = useState({})
  const [error, setError] = useState('')
  const auth = getAuth()
  const googleProvider = new GoogleAuthProvider()
  const googleSignIn = (auth, googleProvider) => {
    return signInWithPopup(auth, googleProvider)
  }
  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential, 'user created')
      })
      .catch((error) => {
        setError(error.message)
      })
  }
  const emailSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user)

        // ...
      })
      .catch((error) => {
        setError(error.message)
      })
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }
    })
  }, [])
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
      .catch((error) => {
        setError(error)
      })
  }
  return {
    user,
    error,
    logOut,
    googleSignIn,
  }
}
export default useFirebase
