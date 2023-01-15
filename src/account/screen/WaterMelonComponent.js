import React from "react";
import LottieView from "lottie-react-native";
//import LottieView = require('lottie-react-native');
//import LottieView from "lottie-react-native";
// if you have "esModuleInterop": true
// import LottieView = require('lottie-react-native'); // otherwise you have "esModuleInterop": false

export const WaterMelonComponent = () => {
  return (
    <LottieView
      source={require("../../../assets/watermelon.json")}
      autoPlay
      loop
    />
  );
};
