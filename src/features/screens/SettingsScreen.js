import React from "react";
import { View, TouchableOpacity, StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

import { AuthenticationContext } from "../../services/authentication/Authentication.Context.js";

import { List, MD3Colors, Avatar } from "react-native-paper";

import { Text } from "../../components/typography/text.component";
import { Spacer } from "../../components/spacer/spacer.component";

export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
  background-color: ${(props) => props.theme.colors.bg.primary};
  //background-color: linen};
`;
const AvatarContainer = styled.View`
  align-items: center;
`;

export const SettingsScreen = ({ navigation }) => {
  const { onLogOut, user } = React.useContext(AuthenticationContext);
  return (
    <SafeArea>
      <View
        style={{
          flex: 1,
          //justifyContent: "center"
        }}
      >
        <AvatarContainer>
          <Avatar.Icon
            size={180}
            icon="file-account"
            backgroundColor="#2182BD"
          />
          <Spacer position="top" size="large">
            <Text variant="label">{user.email}</Text>
          </Spacer>
        </AvatarContainer>
        <Spacer position="left" size="large">
          <List.Section>
            <List.Subheader>Settings Tab</List.Subheader>
            <List.Item
              title="My Favourites"
              left={() => <List.Icon icon="heart-box-outline" />}
              onPress={() => {
                navigation.navigate("Fav");
              }}
            />
            <List.Item
              title="Logout"
              left={() => <List.Icon color={MD3Colors.error50} icon="logout" />}
              onPress={() => {
                console.log("logout");
                onLogOut();
              }}
            />
          </List.Section>
        </Spacer>

        {/* <Text>Settings!</Text>
      <TouchableOpacity
        onPress={() => {
          console.log("logout");
          onLogOut();
        }}
      >
        <Text>Settings! Logout</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Fav");
        }}
      >
        <Text>Settings!=> Fav</Text>
      </TouchableOpacity> */}
      </View>
    </SafeArea>
  );
};
