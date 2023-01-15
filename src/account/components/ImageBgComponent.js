import React from "react";
import styled from "styled-components/native";
import { ImageBackground, Text, View } from "react-native";
import { Button } from "react-native-paper";

export const BgImage = styled.ImageBackground.attrs({
  source: require("../../../assets/home_bg.jpg"),
})`
  flex: 1;
  justify-content: center;
  resizemode: cover;
`;
export const AccountCover = styled.View`
  position: absolute;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(210, 255, 255, 0.4);
`;

export const Txt = styled(Text)`
  color: black;
  font-size: 28px;
  line-height: 84px;
  font-weight: bold;
  text-align: center;
  // background: #000000c0;
  padding: 5px;
  margin: 5px;
`;
export const BtnItself = styled(Button)`
  font-size: 28px;
  line-height: 84px;
  font-weight: bold;
  padding: 5px;
  margin: 5px;
`;
export const BtnWrap = styled(View)`
  text-align: center;
  background: #000000c0;
  padding: 5px;
  margin: 5px;
`;
export const Con = styled(View)`
  flex: 1;
`;
export const ErrorContainer = styled(View)`
  max-width: 300px;
  //align-items: center;
`;
export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;
