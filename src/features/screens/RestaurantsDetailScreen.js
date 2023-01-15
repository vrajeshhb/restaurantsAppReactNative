import React from "react";
import { RestaurantInfoCard } from "../components/Restuarants-info-Card.components";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

export const RestaurantsDetailScreen = ({ route }) => {
  const [expandedBF, setExpandedBF] = React.useState(false);
  const [expandedLU, setExpandedLU] = React.useState(false);
  const [expandedDI, setExpandedDI] = React.useState(false);
  const [expandedDrinks, setExpandedDrinks] = React.useState(false);

  const { restaurant } = route.params;
  //console.log(restaurant);
  return (
    <>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Section title="Menu">
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
            expanded={expandedBF}
            onPress={() => {
              setExpandedBF(!expandedBF);
            }}
          >
            <List.Item title="Baked Eggs with Swiss Chard" />
            <List.Item title="Spinach-Mushroom Strata" />
            <List.Item title="Shirred Eggs with Leeks" />
            <List.Item title="Soft-scrambled eggs" />
            <List.Item title="Huevos Rancheros" />
            <List.Item title="Avocado, Chèvre and Bacon Omelette" />
          </List.Accordion>

          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="food" />}
            expanded={expandedLU}
            onPress={() => {
              setExpandedLU(!expandedLU);
            }}
          >
            <List.Item title="Sour Cream-Lemon Pie" />
            <List.Item title="Amazing Slow Cooker Orange Chicken" />
            <List.Item title="Eggplant Rollatini" />
            <List.Item title="California Sushi Rolls" />
            <List.Item title="Broccoli Shrimp Alfredo" />
            <List.Item title="Chicken Tostada Cups" />
          </List.Accordion>

          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food-turkey" />}
            expanded={expandedDI}
            onPress={() => {
              setExpandedDI(!expandedDI);
            }}
          >
            <List.Item title="Slow-Cooker Chicken Pumpkin Curry" />
            <List.Item title="Slow-Cooker Swimming Rama" />
            <List.Item title="Slow-Cooker Mushroom Mac and Cheese" />
            <List.Item title="Italian Pot Roast" />
            <List.Item title="Wine-Braised Beef with Mushrooms" />
            <List.Item title="Red Beans and Rice" />
          </List.Accordion>

          <List.Accordion
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="glass-cocktail" />}
            expanded={expandedDrinks}
            onPress={() => {
              setExpandedDrinks(!expandedDrinks);
            }}
          >
            <List.Item title="Coffee" />
            <List.Item title="Tea" />
            <List.Item title="Coke" />
            <List.Item title="Fanta" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </>
  );
};
