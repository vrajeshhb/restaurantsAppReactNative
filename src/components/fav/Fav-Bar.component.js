import { View, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import styled from "styled-components/native";
import { CompactRes } from "../../features/components/compactRes.js";
import { Spacer } from "../spacer/spacer.component.js";
import { Text } from "../typography/text.component.js";
const FavView = styled(View)`
  padding: 5px;
`;
export const FavBar = ({ favourites, onNavigation }) => {
  // console.log(favourites);
  if (favourites.length === 0) {
    return null;
  }
  return (
    <FavView>
      <Spacer position="left" size="large">
        <Text variant="caption" size="large">
          Favourites
        </Text>
      </Spacer>
      <ScrollView horizontal={true} showHorizontolScrollIndicator={false}>
        {/* <Text>Fav-Bar.component</Text> */}
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          //console.log(restaurant);
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() => {
                  onNavigation("RestaurantsDetails", {
                    restaurant,
                  });
                }}
              >
                <CompactRes restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavView>
  );
};
