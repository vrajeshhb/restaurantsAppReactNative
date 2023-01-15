// import { mocks } from "./mock";
// import { Text } from "react-native-paper";
// import camelize from "camelize";
// export const RestaurantsRequest = (location = "43.653225,-79.383186") => {
//   //console.log(location);
//   //console.log(location);
//   return new promise((resolve, reject) => {
//     const mock = mock[location];
//     if (!mock) {
//       reject("not found");
//     }
//     resolve(mock);
//   });
// };

// export const restaurantsTransform = ({ result = [] }) => {
//   //const newResult = camelize(result);
//   const mappedResults = results.map((restaurant) => {
//     return {
//       ...restaurant,
//       isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
//       isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
//     };
//   });
//   return mappedResults;
// };

// RestaurantsRequest()
//   .then(restaurantsTransform)
//   .then((transformedResponse) => {
//     console.log(transformedResponse);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
import { mocks, mockImages } from "./mock";
import camelize from "camelize";

export const restaurantsRequest = (location) => {
  return new Promise((resolve, reject) => {
    // console.log("inside resSrevice loc is ");
    // console.log(location);
    // const lString = `${location}`;

    const mock = mocks[location];
    // console.log("inside resSrevice miock is ");
    //console.log(mock);
    if (!mock) {
      reject("not found");
    }

    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.ceil(Math.random() * (mockImages.length - 1))];
    });
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  //console.log(mappedResults);
  return camelize(mappedResults);
};
