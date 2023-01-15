import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Pressable,
} from "react-native";
import { Avatar, Button, Card } from "react-native-paper";
import React from "react";

import { RestaurantContext } from "../../services/restaurants/restaurants.context.js";
import { FavouritesContext } from "../../services/favurites/favourites.context.js";
import { RestaurantInfoCard } from "../components/Restuarants-info-Card.components";

import { Spacer } from "../../components/spacer/spacer.component.js";
import { FadeInView } from "../components/fade.animation";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  justifycontent: "center";
`;
const ListView = styled(View)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.secondary};
  padding-top: ${(props) => props.theme.space[2]};
  padding-left: ${(props) => props.theme.space[3]};
  padding-right: ${(props) => props.theme.space[3]};
`;

const LeftContent = (props) => (
  <Avatar.Icon {...props} icon="keyboard-backspace" />
);

export const FavouritesScreen = ({ navigation }) => {
  const { restaurants, isLoading } = React.useContext(RestaurantContext);
  const { favourites } = React.useContext(FavouritesContext);
  return (
    <SafeArea>
      <Spacer position="bottom" size="large">
        <Spacer position="left" size="large">
          <Spacer position="right" size="large">
            <Card>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Setting");
                }}
              >
                <FadeInView>
                  <Card.Title title="My Favourites " left={LeftContent} />
                </FadeInView>
              </TouchableOpacity>
            </Card>
          </Spacer>
        </Spacer>
      </Spacer>
      <FlatList
        data={favourites}
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
                <Spacer position="left" size="large">
                  <Spacer position="right" size="large">
                    <FadeInView>
                      <RestaurantInfoCard restaurant={item} />
                    </FadeInView>
                  </Spacer>
                </Spacer>
              </Pressable>
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
      {/* <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Setting");
          }}
        >
          <Text></Text>
        </TouchableOpacity>
      </View> */}
    </SafeArea>
  );
};
