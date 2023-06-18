import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../Firebase/firebase.config";
import axios from "axios";
import { LOCALSTORAGE } from "localforage";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
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
    return signInWithEmailAndPassword(auth, email, password);
  };

  //  google signIn

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
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
      console.log("current user", currentUser);

      //  get and set token
      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", {
            email: currentUser.email,
          })
          .then((data) => {
            console.log(data.data.token);
            localStorage.setItem("access-token", data.data.token);
          });
      } else {
        localStorage.removeItem("access-token");
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // profile Updated
  const upDateProfile = (currentUser, name, photo) => {
    return updateProfile(currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    signIn,
    logOut,
    upDateProfile,
    googleSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
