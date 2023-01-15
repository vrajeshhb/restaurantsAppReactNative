import * as React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../account/screen/HomeScreen.js";
import { LoginScreen } from "../account/screen/LoginScreen.js";
import { RegisterScreen } from "../account/screen/RegisterScreen.js";

const Stack = createNativeStackNavigator();

export const AccountNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

// function LoginScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>LoginScreen Screen</Text>
//     </View>
//   );
// }

// function RegisterScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Register Screen</Text>
//     </View>
//   );
// }
//start of ols account navigatior
// import { View, Text } from "react-native";
// import React from "react";
// import {
//   createStackNavigator,
//   TransitionPresets,
// } from "@react-navigation/stack";
// const AccStack = createStackNavigator();

// const MainScreen = () => {
//   <View style={{ justifyContent: "center" }}>
//     <Text style={{ fontSize: 40 }}>Main Screen</Text>
//   </View>;
// };
// const LoginScreen = () => {
//   <View style={{ justifyContent: "center" }}>
//     <Text style={{ fontSize: 40 }}>Login Screen</Text>
//   </View>;
// };

// export const AccountNavigation = () => {
//   return (
//     <AccStack.Navigator
//       screenOptions={{
//         ...TransitionPresets.ModalTransition,
//         headerShown: false,
//       }}
//     >
//       <AccStack.Screen name="Main" component={MainScreen} />
//       <AccStack.Screen name="Login" component={LoginScreen} />
//     </AccStack.Navigator>
//   );
// };
