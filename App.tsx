import React, { useState, useEffect } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/themes";
import {
  useFonts,
  Inter_900Black,
  Inter_300Light,
} from "@expo-google-fonts/inter";
import { Navigation } from "./src/navigation";

import { AuthenticationContextProvider } from "./src/services/authentication/Authentication.Context.js";

import { initializeApp } from "firebase/app";
//import * as firebase from "firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

//if (firebase.apps.length) {
const firebase = initializeApp(firebaseConfig);
const auth = getAuth();
//}

//}
export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_300Light,
  });

  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // useEffect(() => {
  //   signInWithEmailAndPassword(auth, "vrajesh@gmail.com", "123456")
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       setIsAuthenticated(true);
  //       //console.log(user);
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       if (errorCode === "auth/wrong-password") {
  //         console.log("Wrong password.");
  //       } else {
  //         console.log(errorMessage);
  //       }
  //       //console.log(errorCode);
  //       //console.log(errorMessage);
  //     });
  // }, []);

  // {
  //   isAuthenticated && console.log(isAuthenticated);
  //   //console.log(user);
  // }

  if (!fontsLoaded) {
    return <ExpoStatusBar style="auto" />;
  } else {
    return (
      <>
        <ThemeProvider theme={theme}>
          {/* <RestaurantsScreen /> */}
          <AuthenticationContextProvider>
            <Navigation />
          </AuthenticationContextProvider>
        </ThemeProvider>
        <ExpoStatusBar style="auto" />
      </>
    );
  }
}
// import { StyleSheet, Text, View } from "react-native";
// import React from "react";
// import { mocks } from "./src/services/restaurants/mock";
// import camelize from "camelize";
// import { Button } from "react-native-paper";
// const App = () => {
//   //console.log(mocks);
//   const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
//     console.log(location);
//     return new Promise((resolve, reject) => {
//       const mock = mocks[location];
//       //console.log(mock);
//       if (!mock) {
//         reject("not found");
//       }
//       resolve(mock);
//       //console.log(mock);
//     });
//   };
//   const restaurantsTransform = ({ results = [] }) => {
//     const mappedResults = results.map((restaurant) => {
//       return {
//         ...restaurant,
//         isOpenNow:
//           restaurant.opening_hours && restaurant.opening_hours.open_now,
//         isClosedTemporarily:
//           restaurant.business_status === "CLOSED_TEMPORARILY",
//       };
//     });
//     //console.log(mappedResults);
//     return camelize(mappedResults);
//   };

//   restaurantsRequest()
//     .then(restaurantsTransform)
//     .then((transformedResponse) => {
//       console.log(transformedResponse);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItem: "center" }}>
//       <Text style={{ textAlign: "center", fontSize: 20 }}>App</Text>
//       <Button mode="contained" onPress={() => restaurantsRequest()}>
//         Fn1
//       </Button>
//       <Button mode="contained" onPress={() => restaurantsTransform}>
//         Fn2
//       </Button>
//     </View>
//   );
// };

// export default App;

// const styles = StyleSheet.create({});
