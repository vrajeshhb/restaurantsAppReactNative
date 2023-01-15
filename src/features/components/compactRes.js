import { View, Image, Platform } from "react-native";
import { WebView } from "react-native-webview";
import React from "react";
import styled from "styled-components/native";

import { Text } from "../../components/typography/text.component.js";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";
export const CompactRes = ({ restaurant, isMap }) => {
  //console.log(restaurant);
  return (
    <>
      <Item>
        {isAndroid && isMap ? (
          <CompactWebview source={{ uri: restaurant.photos[0] }} />
        ) : (
          <CompactImage source={{ uri: restaurant.photos[0] }} />
        )}
        <Text variant="caption" numberOfLines={1}>
          {restaurant.address}
        </Text>
        {/* <Text variant="caption" numberOfLines={3}>
          {restaurant.name}
        </Text> */}
      </Item>
    </>
  );
};
