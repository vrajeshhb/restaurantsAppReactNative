import * as React from "react";
import { View, TouchableOpacity } from "react-native";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { SettingsScreen } from "../features/screens/SettingsScreen";
import { FavouritesScreen } from "../features/screens/FavouritesScreen";
// import { MapScreen } from "../features/screens/MapScreen";
import { AuthenticationContext } from "../services/authentication/Authentication.Context.js";

import { Text } from "react-native-paper";

const SettingStack = createStackNavigator();

export const SettingStackNavigation = () => {
  return (
    <SettingStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <SettingStack.Screen name="Setting" component={SettingsScreen} />
      <SettingStack.Screen name="Fav" component={FavouritesScreen} />
    </SettingStack.Navigator>
  );
};
