import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { Platform, Text } from "react-native";
import { LocationContext } from "../../services/location/location.context";

const AndroidSearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
  padding-top: ${(props) => props.theme.space[4]};
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = ({ isFavToggle, onFavToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  const isAndroid = Platform.OS === "android";
  //console.log(isAndroid);
  //console.log(isFavToggle);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  // useEffect(() => {
  //   search(searchKeyword);
  // }, []);
  //might cause infinity loop
  return (
    <>
      {isAndroid == true ? (
        <AndroidSearchContainer>
          <Searchbar
            placeholder="Search for a location"
            icon={isFavToggle ? "heart" : "cards-heart-outline"}
            onIconPress={onFavToggle}
            value={searchKeyword}
            onSubmitEditing={() => {
              search(searchKeyword);
            }}
            onChangeText={(text) => {
              setSearchKeyword(text);
            }}
          />
        </AndroidSearchContainer>
      ) : (
        <SearchContainer>
          <Searchbar
            placeholder="Search for a location"
            icon={isFavToggle ? "heart" : "cards-heart-outline"}
            onIconPress={onFavToggle}
            value={searchKeyword}
            onSubmitEditing={() => {
              search(searchKeyword);
            }}
            onChangeText={(text) => {
              setSearchKeyword(text);
            }}
          />
        </SearchContainer>
      )}
    </>
  );
};
