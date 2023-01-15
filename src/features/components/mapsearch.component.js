import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../services/location/location.context";

const SearchContainer = styled.View`
  position: absolute;
  padding: ${(props) => props.theme.space[3]};
  padding-top: ${(props) => props.theme.space[5]};
  z-index: 999;
  width: 100%;
`;

export const MapSearch = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  // useEffect(() => {
  //   search(searchKeyword);
  // }, []);
  //might cause infinity loop

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a location"
        icon={"map-search"}
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearchKeyword(text);
        }}
      />
    </SearchContainer>
  );
};
