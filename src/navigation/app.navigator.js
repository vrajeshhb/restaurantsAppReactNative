import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { MyStack } from "./restaurant.navigation";
import { MapScreen } from "../features/screens/MapScreen.js";
import { SettingStackNavigation } from "./Setting.Navigation";
import { AuthenticationContext } from "../services/authentication/Authentication.Context.js";

const Tab = createMaterialBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="restaurants"
        component={MyStack}
        options={{
          tabBarLabel: "Restaurants",
          tabBarIcon: () => <MaterialCommunityIcons name="home" size={26} />,
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          tabBarLabel: "Map",
          tabBarIcon: () => <MaterialCommunityIcons name="map" size={26} />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingStackNavigation}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account-settings" size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// import React from "react";
// import { MyStack } from "./restaurant.navigation";
// import { MapScreen } from "../features/screens/MapScreen";
// import { BottomNavigation, Text } from "react-native-paper";
// import { NavigationContainer } from "@react-navigation/native";
// import {
//   createStackNavigator,
//   TransitionPresets,
// } from "@react-navigation/stack";
// //const Stack = createStackNavigator();

// // const AlbumsRoute = () => <MapScreen />;

// // const RecentsRoute = () => <Text>Recents</Text>;

// // const RestaurantsStacks = () => <MyStack />;
// export const AppNavigator = () => {
//   // const [index, setIndex] = React.useState(0);

//   // const [routes] = React.useState([
//   //   {
//   //     key: "restaurants",
//   //     title: "Restaurants",
//   //     focusedIcon: "silverware",
//   //   },
//   //   { key: "maps", title: "maps", focusedIcon: "map-marker-radius" },
//   //   { key: "setting", title: "setting", focusedIcon: "cog-outline" },
//   // ]);

//   // const renderScene = BottomNavigation.SceneMap({
//   //   restaurants: RestaurantsStacks,
//   //   maps: AlbumsRoute,
//   //   setting: RecentsRoute,
//   // });

//   return (
//     <NavigationContainer>

//       {/* <BottomNavigation
//         navigationState={{ index, routes }}
//         onIndexChange={setIndex}
//         renderScene={renderScene}
//       /> */}
//     </NavigationContainer>
//   );
// };
