import { View, Image, Pressable } from "react-native";
import React, { useState, useContext, useEffect } from "react";
import MapView, { Marker, AnimatedRegion, Callout } from "react-native-maps";
import { MapSearch } from "../components/mapsearch.component.js";
import styled from "styled-components/native";
import { CompactRes } from "../components/compactRes.js";
import { RestaurantContext } from "../../services/restaurants/restaurants.context.js";
import { LocationContext } from "../../services/location/location.context";
import { Text } from "../../components/typography/text.component.js";

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;
const MapCallout = styled(Callout)`
  align-items: center;
`;

export const MapScreen = ({ navigation }) => {
  //console.log({ navigation });
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantContext);
  const [latDelta, setLatDelta] = useState(0);
  const { viewport } = location;
  //console.log(viewport);
  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  const Pointer = (restaurant) => {
    //console.log(restaurant.name);
    //console.log(restaurant.photos[0]);

    return (
      <Marker.Animated
        key={restaurant.name}
        title={restaurant.name}
        coordinate={{
          latitude: restaurant.geometry.location.lat,
          longitude: restaurant.geometry.location.lng,
        }}
      >
        <MapCallout
          onPress={() =>
            navigation.navigate("RestaurantsDetails", { restaurant })
          }
        >
          <Text center variant="caption" numberOfLines={3}>
            {restaurant.name}
          </Text>
          <CompactRes restaurant={restaurant} />
        </MapCallout>
      </Marker.Animated>
    );
  };

  return (
    <>
      <MapSearch />

      <Map
        region={{
          latitude: location.lat,
          longitude: location.lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.0421,
        }}
      >
        {restaurants.map((restaurant) => {
          return Pointer(restaurant);
        })}
      </Map>
    </>
  );
};

// onPress={() =>
//   navigation.navigate("RestaurantsDetails", {
//     restaurant,
//   })
// }
{
  /* <View style={{ width: 100, height: 100 }}>
            <Image
              style={{ width: "90%", height: "90%" }}
              source={{ uri: restaurant.photos[0] }}
            />
            <Text>{restaurant.name}</Text>
          </View> */
}

{
  /* {restaurants.map((restaurant) => {
          return (
            <Marker.Animated
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            />
          );
        })} */
}

{
  /* <Marker.Animated
          key={"restaurant.name"}
          title={"restaurant.name"}
          coordinate={{
            latitude: 37.77710419999999,
            longitude: -122.4227403,
          }}
        />
       */
}
