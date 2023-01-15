import { View, TouchableOpacity } from "react-native";
import React, { useState, useContext } from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import {
  BgImage,
  AccountCover,
  BtnItself,
  Txt,
  ErrorContainer,
} from "../components/ImageBgComponent.js";
import {
  IconButton,
  Button,
  Card,
  MD3Colors,
  TextInput,
} from "react-native-paper";
import { Spacer } from "../../components/spacer/spacer.component.js";
import { Text } from "../../components/typography/text.component.js";

import { colors } from "../../themes/colors.js";

import { AuthenticationContext } from "../../services/authentication/Authentication.Context.js";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);
  return (
    <BgImage>
      <AccountCover>
        <Card style={{ margin: 10 }}>
          <Spacer size={"large"}>
            <IconButton
              style={{ widht: "100%" }}
              icon="keyboard-backspace"
              iconColor={MD3Colors.error50}
              size={20}
              onPress={() => {
                navigation.navigate("Home");
              }}
            />
          </Spacer>
          <Txt> MealsToGo </Txt>
          <Card.Content>
            <TextInput
              label="Email"
              value={email}
              textContentType="emailAddress"
              keyboardType="email-address"
              autoCapitalize="none"
              onChangeText={(u) => setEmail(u)}
              right={<TextInput.Icon icon="email" />}
            />
            <Spacer size={"large"}>
              <TextInput
                label="Password"
                value={password}
                textContentType="password"
                secureTextEntry
                autoCapitalize="none"
                onChangeText={(p) => setPassword(p)}
                right={<TextInput.Icon icon="eye" />}
              />
            </Spacer>
            <Spacer size={"large"}>
              {isLoading ? (
                <ActivityIndicator
                  size={30}
                  animating={true}
                  color={MD2Colors.red800}
                />
              ) : (
                <BtnItself
                  icon="account-check"
                  mode="contained"
                  buttonColor={colors.brand.primary}
                  size={100}
                  onPress={() => {
                    onLogin(email, password);
                    //onLogin("vrajesh@gmail.com", "123456");
                    //console.log(email);
                    //console.log(password);
                  }}
                >
                  Login
                </BtnItself>
              )}
            </Spacer>
            {error && (
              <Spacer size="large">
                <>
                  <Text style={{ textAlign: "center" }} variant="error">
                    {error}
                  </Text>
                </>
              </Spacer>
            )}
          </Card.Content>
        </Card>
      </AccountCover>
    </BgImage>
  );
};
