import { View, Text } from "react-native";
import React from "react";

import { initializeApp } from "firebase/app";
//import * as firebase from "firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const LoginRequest = ({ email, password }) => {
  // firebase.auth().signInWithEmailAndPassword(email, password);
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      //setIsAuthenticated(true);
      //console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === "auth/wrong-password") {
        console.log("Wrong password.");
      } else {
        console.log(errorMessage);
      }
      //console.log(errorCode);
      console.log(errorMessage);
    });
};
export const Authentication = () => {
  return (
    <View>
      <Text>Authentication.service</Text>
    </View>
  );
};
