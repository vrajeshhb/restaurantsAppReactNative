import { View, Text } from "react-native";
import React, { useState, createContext } from "react";

import { initializeApp } from "firebase/app";
//import * as firebase from "firebase";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
//import { LoginRequest } from "./Authentication.service.js";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

//if (firebase.apps.length) {
const firebase = initializeApp(firebaseConfig);
const auth = getAuth();
//}

export const AuthenticationContext = createContext();
export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthentication, setIsAuthentication] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogOut = () => {
    signOut(auth)
      .then(() => {
        setIsAuthentication(false);
        setUser(null);
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
    //firebase.auth.signOut();
    // auth()
    //   .signOut()
    //   .then(() => console.log("User signed out!"));
  };

  const onLogin = (email, password) => {
    setIsLoading(true);
    //console.log(isLoading);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const u = userCredential.user;
        setIsAuthentication(true);
        setUser(u);
        //console.log(user);
        setIsLoading(false);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          //console.log("Wrong password.");
          setError("Wrong password.");
        } else if (errorCode === "auth/user-not-found") {
          setError("Sorry Email is Not Registered.");
        } else if (errorCode === "auth/invalid-email") {
          setError("Invalid Email Format");
        } else if (errorCode === "auth/too-many-requests") {
          setError(
            "Too Many Worng Password attemts, We Might Block Your Account.."
          );
        } else {
          //console.log(errorMessage);
          setError(errorMessage);
        }
        // console.log(errorCode);
        //console.log(errorMessage);
        //console.log(error);
        setIsLoading(false);
      });
    // LoginRequest(email, password)
    //   .then((u) => {
    //     setUser(u);
    //     setIsLoading(false);
    //   })
    //   .catch((e) => {
    //     setError(e);
    //   });
  };

  const onRegister = (email, password, repassword) => {
    setIsLoading(true);

    if (password === repassword) {
      // createUserWithEmailAndPassword(email: string, password: string): Promise<UserCredential>;
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const u = userCredential.user;
          setIsAuthentication(true);
          setUser(u);
          setIsLoading(false);
          //console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // console.log(errorCode);
          console.log(errorMessage);
          if (errorMessage === "auth/email-already-in-use") {
            setError("This Email Is already Been Used.");
          } else if (errorMessage === "auth/invalid-email") {
            setError("Error. Please Checkk the Email.");
          } else if (errorMessage === "auth/weak-password") {
            setError("Password should be at least 6 characters");
          } else {
            setError(errorMessage);
          }
          setIsLoading(false);
          // ..
        });
    } else {
      setError("Passwords Doesnt Match.");
      setIsLoading(false);
    }
  };
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthentication,
        isLoading,
        user,
        error,
        onLogin,
        onRegister,
        onLogOut,
      }}
    >
      {children}
      {/* <Text>Authentication.Context</Text> */}
    </AuthenticationContext.Provider>
  );
};
