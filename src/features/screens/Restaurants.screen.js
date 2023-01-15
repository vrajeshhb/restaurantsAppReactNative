//import * as React from "react";
import React, { useState, useContext } from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  FlatList,
  Pressable,
} from "react-native";

import { Searchbar, ActivityIndicator, MD2Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/Restuarants-info-Card.components";
import { Search } from "../components/search.component";
import styled from "styled-components/native";
import { Spacer } from "../../components/spacer/spacer.component.js";
import { FavBar } from "../../components/fav/Fav-Bar.component.js";
import { FadeInView } from "../components/fade.animation";

import { RestaurantContext } from "../../services/restaurants/restaurants.context.js";
import { FavouritesContext } from "../../services/favurites/favourites.context.js";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  justifycontent: "center";
`;

// const SearchView = styled(View)`
//   justifycontent: "center";
//   padding: ${(props) => props.theme.space[3]};
//   ${StatusBar.currentHeight && `margintop: ${StatusBar.currentHeight}px`};
//   background-color: ${(props) => props.theme.colors.bg.secondary};
// `;
const ListView = styled(View)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding-top: ${(props) => props.theme.space[2]};
  padding-left: ${(props) => props.theme.space[3]};
  padding-right: ${(props) => props.theme.space[3]};
`;

// const DATA = [
//   { name: 1 },
//   { name: 2 },
//   { name: 3 },
//   { name: 4 },
//   { name: 5 },
//   { name: 6 },
//   { name: 7 },
//   { name: 8 },
//   { name: 9 },
//   { name: 10 },
//   { name: 11 },
//   { name: 12 },
//   { name: 13 },
//   { name: 14 },
// ];

export const RestaurantsScreen = ({ navigation }) => {
  // const [searchQuery, setSearchQuery] = React.useState("");
  // const onChangeSearch = (query) => {
  //   setSearchQuery(query);
  //   //console.log("You Changed this..");
  // };

  // const Item = ({ title }) => <RestaurantInfoCard />;
  // const renderItem = ({ item }) => <Item />;

  const { restaurants, isLoading } = useContext(RestaurantContext);
  //const { favourites } = useContext(FavouritesContext);
  //console.log(restaurants.length);
  //console.log(favourites);

  const [isToggled, setIsToggled] = useState(false);
  const onPressFunction = () => {
    navigation.navigate("RestaurantsDetails");
  };

  const { favourites } = useContext(FavouritesContext);
  return (
    <>
      <SafeArea>
        {/* <SearchView>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </SearchView> */}

        <Search
          isFavToggle={isToggled}
          onFavToggle={() => setIsToggled(!isToggled)}
        />
        {isToggled && (
          <FavBar favourites={favourites} onNavigation={navigation.navigate} />
        )}
        <ListView>
          {isLoading && (
            <ActivityIndicator
              size={"large"}
              animating={true}
              color={MD2Colors.purple800}
            />
          )}
          <FlatList
            data={restaurants}
            renderItem={({ item }) => {
              //console.log(item);
              return (
                <Spacer position="bottom" size="large">
                  <Pressable
                    onPress={() => {
                      navigation.navigate("RestaurantsDetails", {
                        restaurant: item,
                      });
                    }}
                  >
                    <FadeInView>
                      <RestaurantInfoCard restaurant={item} />
                    </FadeInView>
                  </Pressable>
                </Spacer>
              );
            }}
            keyExtractor={(item) => item.name}
          />
          {/* <RestaurantInfoCard /> */}

          {/* <Text>{searchQuery}</Text>
          <Text>{StatusBar.currentHeight}</Text> */}
          {/* ${StatusBar.currentHeight && `margintop: ${StatusBar.currentHeight}px`}; */}
        </ListView>
      </SafeArea>
      <ExpoStatusBar style="auto" />
    </>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     justifyContent: "center",
//   },
//   searchView: {
//     flex: 1,
//     justifyContent: "center",
//     height: "10%",
//     // backgroundColor: "blue",
//     padding: 10,
//     marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   },
//   listView: {
//     //flex: 1,
//     //    justifyContent: "center",
//     height: "90%",
//     backgroundColor: "green",
//     padding: 10,
//   },
// });
