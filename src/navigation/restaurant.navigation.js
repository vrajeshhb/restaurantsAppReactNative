import * as React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsScreen } from "../features/screens/Restaurants.screen";
import { RestaurantsDetailScreen } from "../features/screens/RestaurantsDetailScreen";
import { MapScreen } from "../features/screens/MapScreen";

const ResStack = createStackNavigator();

export const MyStack = () => {
  return (
    <ResStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalTransition,
        headerShown: false,
      }}
    >
      <ResStack.Screen name="Restaurants" component={RestaurantsScreen} />
      <ResStack.Screen
        name="RestaurantsDetails"
        component={RestaurantsDetailScreen}
      />
      {/*  <ResStack.Screen name="MapScreen" component={MapScreen} />

      <ResStack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
    </ResStack.Navigator>
  );
};
