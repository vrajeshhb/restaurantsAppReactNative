import React from "react";
import styled from "styled-components/native";
import { Image, View } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import { Spacer } from "../../components/spacer/spacer.component";
import { Fav } from "../../components/fav/Fav.Compoment.js";

import { Text } from "../../components/typography/text.component";
import star from "../../../assets/star";
import open from "../../../assets/open";

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Icon,
  Address,
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId = "",
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Fav restaurant={restaurant} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml
                key={`star-${placeId}-${i}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};

// import { Text, View, Image } from "react-native";
// import React from "react";
// import { Card } from "react-native-paper";
// import styled from "styled-components/native";
// import { SvgXml } from "react-native-svg";
// import IsOpenIcon from "../../../assets/isOpen.svg";

// const ResCard = styled(Card)``;
// const ResCardCover = styled(Card.Cover)`
//   padding: ${(props) => props.theme.space[3]};
// `;
// const Title = styled(Text)`
//   font-family: ${(props) => props.theme.fonts.heading};
//   font-size: ${(props) => props.theme.fontSizes.title};
//   color: ${(props) => props.theme.colors.ui.primary};
// `;
// const Address = styled(Text)`
//   font-family: ${(props) => props.theme.fonts.body};
//   font-size: font-size: ${(props) => props.theme.fontSizes.body};
// `;
// const Info = styled(View)`
//   padding: ${(props) => props.theme.space[3]};
// `;
// const Rating = styled(Image)`
//   height: 30px;
//   width: 30px;
//   resizemode: "none";
//   padding: ${(props) => props.theme.space[3]};
// `;
// const RatingRow = styled(View)`
//   flex-direction: row;
//   padding-top: ${(props) => props.theme.space[1]};
//   padding-bottom: ${(props) => props.theme.space[2]};
// `;
// const RatingSection = styled(View)`
//   flex-direction: row;
//   align-items: center;
//   padding-top: ${(props) => props.theme.space[1]};
//   padding-bottom: ${(props) => props.theme.space[2]};
// `;
// const SectionEnd = styled(View)`
//   flex: 1;
//   flex-direction: row;
//   justify-content: flex-end;
// `;

// export const RestuarantInfoCard = (restuarants = {}) => {
//   const {
//     name = "Restuarants From object",
//     icon = "",
//     photo = "https://picsum.photos/700",
//     address = "Some Street",
//     isOpenNow = true,
//     rating = 5,
//     isClosedTemporarily = true,
//   } = restuarants;

//   const ratingArray = Array.from(new Array(Math.floor(rating)));
//   //console.log({ ratingArray });
//   return (
//     <>
//       <ResCard elevation={5}>
//         <ResCardCover source={{ uri: photo }} />
//         <Info>
//           <Title>{name}</Title>

//           <RatingSection>
//             <RatingRow>
//               {ratingArray.map(() => (
//                 <Rating source={require("../../../assets/star.png")} />
//               ))}
//             </RatingRow>
//             <SectionEnd>
//               {isClosedTemporarily && (
//                 <Text style={{ color: "red", fontSize: 20, padding: 5 }}>
//                   Closed
//                 </Text>
//               )}
//               {isOpenNow && (
//                 <Rating source={require("../../../assets/isOpen.png")} />
//               )}
//             </SectionEnd>
//           </RatingSection>

//           <Address>{address}</Address>
//         </Info>
//       </ResCard>
//     </>
//   );
// };
