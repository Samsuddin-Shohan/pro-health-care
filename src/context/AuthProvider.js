import React, { Children, createContext } from 'react'
import useFirebase from '../hooks/useFirebase'

const AuthContext = createContext()

const AuthProvider = () => {
  const allContext = useFirebase()
  return (
    <AuthContext.Provider value={allContext}>{Children}</AuthContext.Provider>
  )
}

export default AuthProvider
