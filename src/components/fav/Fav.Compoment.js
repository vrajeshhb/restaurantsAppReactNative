import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { FavouritesContext } from "../../services/favurites/favourites.context.js";

const FavButton = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;
export const Fav = ({ restaurant }) => {
  //console.log(restaurant);
  const { favourites, addToFav, removeFromFav } = useContext(FavouritesContext);
  //console.log(favourites);
  const isFav = favourites.find((r) => r.placeId === restaurant.placeId);
  //console.log(favourites.length);
  return (
    <FavButton
      onPress={() => {
        !isFav ? addToFav(restaurant) : removeFromFav(restaurant);
      }}
    >
      <AntDesign
        name={isFav ? "heart" : "hearto"}
        color={isFav ? "red" : "white"}
        size={24}
      />
    </FavButton>
  );
};
