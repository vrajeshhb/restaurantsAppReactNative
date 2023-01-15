import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Card, MD3Colors } from "react-native-paper";

import { Spacer } from "../../components/spacer/spacer.component.js";
import React, { useContext } from "react";
import styled from "styled-components/native";
import {
  BgImage,
  AccountCover,
  Txt,
  Con,
  BtnWrap,
  BtnItself,
  AnimationWrapper,
} from "../components/ImageBgComponent.js";
import { colors } from "../../themes/colors.js";
import LottieView from "lottie-react-native";
export const HomeScreen = ({ navigation }) => {
  return (
    <Con>
      <BgImage>
        <AccountCover>
          <AnimationWrapper>
            <LottieView
              source={require("../../../assets/watermelon.json")}
              autoPlay
              loop
            />
          </AnimationWrapper>
          <Card style={{ margin: 10 }}>
            <Txt> MealsToGo </Txt>

            <Spacer position={"right"} size={"large"}>
              <Spacer position={"left"} size={"large"}>
                <Spacer position={"top"} size={"large"}>
                  <BtnItself
                    icon="login"
                    mode="contained"
                    buttonColor={colors.brand.primary}
                    size={100}
                    onPress={() => navigation.navigate("Login")}
                  >
                    Login
                  </BtnItself>
                </Spacer>
                <Spacer position={"top"} size={"large"}>
                  <Spacer>
                    <Spacer position={"bottom"} size={"large"}>
                      <BtnItself
                        icon="account-check"
                        mode="contained"
                        buttonColor={colors.brand.primary}
                        size={100}
                        onPress={() => navigation.navigate("Register")}
                      >
                        Register
                      </BtnItself>
                    </Spacer>
                  </Spacer>
                </Spacer>
              </Spacer>
            </Spacer>
          </Card>
          {/* <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Txt>Login</Txt>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              <Txt>Register</Txt>
            </TouchableOpacity> */}
        </AccountCover>
      </BgImage>
    </Con>
  );
};
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
