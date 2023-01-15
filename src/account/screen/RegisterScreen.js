import { View, TouchableOpacity } from "react-native";
import React, { useState, useContext } from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import {
  BgImage,
  AccountCover,
  BtnItself,
  Txt,
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

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repassword, setRepassword] = React.useState("");
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);

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
          <Txt> Meals To Go </Txt>

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
                secure
                onChangeText={(p) => setPassword(p)}
                right={<TextInput.Icon icon="eye" />}
              />
            </Spacer>
            <Spacer size={"large"}>
              <TextInput
                label="Conform Password"
                value={repassword}
                textContentType="password"
                secureTextEntry
                autoCapitalize="none"
                secure
                onChangeText={(p) => setRepassword(p)}
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
                    onRegister(email, password, repassword);
                  }}
                >
                  Register
                </BtnItself>
              )}
            </Spacer>
            {error && (
              <Spacer size="large">
                <Text style={{ textAlign: "center" }} variant="error">
                  {error}
                </Text>
              </Spacer>
            )}
          </Card.Content>
        </Card>
      </AccountCover>
    </BgImage>
  );
};
