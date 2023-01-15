import React, { useContext } from "react";
import { AppNavigator } from "./app.navigator";
import { Text, View } from "react-native";
import { AuthenticationContext } from "../services/authentication/Authentication.Context.js";
import { NavigationContainer } from "@react-navigation/native";
import { AccountNavigation } from "./account.navigation";
import { RestaurantContextProvider } from "../services/restaurants/restaurants.context";
import { LocationContextProvider } from "../services/location/location.context";
import { FavouritesContextProvider } from "../services/favurites/favourites.context.js";

export const Navigation = () => {
  const { isAuthentication } = useContext(AuthenticationContext);
  return (
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantContextProvider>
          <NavigationContainer>
            {isAuthentication ? <AppNavigator /> : <AccountNavigation />}
          </NavigationContainer>
        </RestaurantContextProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
};
