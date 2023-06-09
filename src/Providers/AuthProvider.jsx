import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   register new user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //  sign in with email pass
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(email, password);
  };

  //   user LogOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   current user detected
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("curren user", currentUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
