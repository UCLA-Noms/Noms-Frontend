import React from "react"
import PropTypes from "prop-types"
import { StyleSheet, StatusBar, SafeAreaView, Image } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { vw } from "react-native-expo-viewport-units"
import RestaurantCard from "../components/RestaurantCard"
import { images } from "../theme"

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})

const Home = ({ navigation }) => {
  const restaurants = [
    {
      name: "Le Pain Quotidien",
      closingTime: new Date(),
      rating: 2.3,
      price: 4,
      liked: false,
      time: "20-30 min",
      type: "Cafe",
      distance: "0.9 mi",
      image: "lePainQuotidien",
      goodyBags: [
        {
          name: "Sandwich Goody Bag",
          price: 4,
          image: "lePainQuotidienGoodyBag1",
          type: "Sandwich",
          rating: 4.5,
          time: 30,
          ingredients: ["Milk", "Wheat", "Tree Nuts", "Eggs"],
        },
        {
          name: "Salad Goody Bag",
          price: 2,
          image: "lePainQuotidienGoodyBag2",
          type: "Salad",
          rating: 4.1,
          time: 20,
          ingredients: ["Wheat", "Chicken", "Eggs", "Vegetables"],
        },
        {
          name: "Dessert Goody Bag",
          price: 3,
          image: "lePainQuotidienGoodyBag3",
          type: "Dessert",
          rating: 4.8,
          time: 15,
          ingredients: ["Wheat", "Chocolate", "Eggs", "Milk"],
        },
      ],
      food: [
        {
          name: "Sandwich",
          price: 4,
          image: "lePainQuotidienFood1",
          type: "Sandwich",
          rating: 4.5,
          time: 30,
          ingredients: ["Milk", "Wheat", "Tree Nuts", "Eggs"],
        },
        {
          name: "Salad",
          price: 2,
          image: "lePainQuotidienFood2",
          type: "Salad",
          rating: 4.1,
          time: 20,
          ingredients: ["Wheat", "Chicken", "Eggs", "Vegetables"],
        },
        {
          name: "Dessert",
          price: 3,
          image: "lePainQuotidienFood3",
          type: "Dessert",
          rating: 4.8,
          time: 15,
          ingredients: ["Wheat", "Chocolate", "Eggs", "Milk"],
        },
      ],
    },
    {
      name: "Drey",
      closingTime: new Date(),
      rating: 1.3,
      price: 2,
      liked: true,
      time: "20-30 min",
      type: "Fish",
      distance: "0.9 mi",
      image: "drey",
      goodyBags: [
        {
          name: "Sushi Goody Bag",
          price: 2,
          image: "dreyGoodyBag1",
          type: "Sushi",
          rating: 3.2,
          time: 30,
          ingredients: ["Fish", "Wheat", "Tree Nuts", "Eggs"],
        },
        {
          name: "Salad Goody Bag",
          price: 2,
          image: "dreyGoodyBag2",
          type: "Salad",
          rating: 1.4,
          time: 20,
          ingredients: ["Wheat", "Chicken", "Eggs", "Vegetables"],
        },
        {
          name: "Dessert Goody Bag",
          price: 3,
          image: "dreyGoodyBag3",
          type: "Dessert",
          rating: 2.4,
          time: 15,
          ingredients: ["Wheat", "Chocolate", "Eggs", "Milk"],
        },
      ],
      food: [
        {
          name: "Sushi",
          price: 2,
          image: "dreyFood1",
          type: "Sushi",
          rating: 1.2,
          time: 30,
          ingredients: ["Fish", "Wheat", "Tree Nuts", "Eggs"],
        },
        {
          name: "Salad",
          price: 2,
          image: "dreyFood2",
          type: "Salad",
          rating: 1.6,
          time: 20,
          ingredients: ["Wheat", "Chicken", "Eggs", "Vegetables"],
        },
        {
          name: "Dessert",
          price: 3,
          image: "dreyFood3",
          type: "Dessert",
          rating: 2.4,
          time: 15,
          ingredients: ["Wheat", "Chocolate", "Eggs", "Milk"],
        },
      ],
    },
    {
      name: "Egg Tuck",
      closingTime: new Date(),
      rating: 3.3,
      price: 3,
      liked: false,
      time: "20-30 min",
      type: "Egg",
      distance: "0.9 mi",
      image: "eggTuck",
      goodyBags: [
        {
          name: "Egg Goody Bag",
          price: 2,
          image: "eggTuckGoodyBag1",
          type: "Egg",
          rating: 3.2,
          time: 30,
          ingredients: ["Egg", "Wheat", "Tree Nuts", "Eggs"],
        },
        {
          name: "Salad Goody Bag",
          price: 2,
          image: "eggTuckGoodyBag2",
          type: "Salad",
          rating: 1.4,
          time: 20,
          ingredients: ["Wheat", "Chicken", "Eggs", "Vegetables"],
        },
        {
          name: "Dessert Goody Bag",
          price: 3,
          image: "eggTuckGoodyBag3",
          type: "Dessert",
          rating: 4.4,
          time: 15,
          ingredients: ["Wheat", "Chocolate", "Eggs", "Milk"],
        },
      ],
      food: [
        {
          name: "Sandwich",
          price: 2,
          image: "eggTuckFood1",
          type: "Egg",
          rating: 4.8,
          time: 30,
          ingredients: ["Egg", "Wheat", "Tree Nuts", "Eggs"],
        },
        {
          name: "Salad",
          price: 2,
          image: "eggTuckFood2",
          type: "Salad",
          rating: 1.6,
          time: 20,
          ingredients: ["Wheat", "Chicken", "Eggs", "Vegetables"],
        },
        {
          name: "Dessert",
          price: 3,
          image: "eggTuckFood3",
          type: "Dessert",
          rating: 2.4,
          time: 15,
          ingredients: ["Wheat", "Chocolate", "Eggs", "Milk"],
        },
      ],
    },
    {
      name: "Restaurant 11",
      closingTime: new Date(),
      rating: 3.3,
      price: 3,
      liked: false,
      time: "20-30 min",
      type: "hall",
      distance: "0.9 mi",
      image: "rListing1",
      goodyBags: [
        {
          name: "Egg Goody Bag",
          price: 2,
          image: "eggTuckGoodyBag1",
          type: "Egg",
          rating: 3.2,
          time: 30,
          ingredients: ["Egg", "Wheat", "Tree Nuts", "Eggs"],
        },
        {
          name: "Salad Goody Bag",
          price: 2,
          image: "eggTuckGoodyBag2",
          type: "Salad",
          rating: 1.4,
          time: 20,
          ingredients: ["Wheat", "Chicken", "Eggs", "Vegetables"],
        },
        {
          name: "Dessert Goody Bag",
          price: 3,
          image: "eggTuckGoodyBag3",
          type: "Dessert",
          rating: 4.4,
          time: 15,
          ingredients: ["Wheat", "Chocolate", "Eggs", "Milk"],
        },
      ],
      food: [
        {
          name: "Sandwich",
          price: 2,
          image: "eggTuckFood1",
          type: "Egg",
          rating: 4.8,
          time: 30,
          ingredients: ["Egg", "Wheat", "Tree Nuts", "Eggs"],
        },
        {
          name: "Salad",
          price: 2,
          image: "eggTuckFood2",
          type: "Salad",
          rating: 1.6,
          time: 20,
          ingredients: ["Wheat", "Chicken", "Eggs", "Vegetables"],
        },
        {
          name: "Dessert",
          price: 3,
          image: "eggTuckFood3",
          type: "Dessert",
          rating: 2.4,
          time: 15,
          ingredients: ["Wheat", "Chocolate", "Eggs", "Milk"],
        },
      ],
    },
  ]

  return (
    <>
      <SafeAreaView style={styles.root}>
        <StatusBar barStyle="light-content" />
        <ScrollView style={{ width: "100%" }}>
          {/* Bad Search Bar */}
          <Image
            style={{ width: vw(100), height: vw(30) }}
            source={images.bruh}
          />

          {/* Map all the restaurants to RestaurantCard */}

          {restaurants.map((restaurant, index) => (
            <RestaurantCard
              key={index}
              restaurantName={restaurant.name}
              closingTime={restaurant.closingTime}
              rating={restaurant.rating}
              price={restaurant.price}
              distance={restaurant.distance}
              liked={restaurant.liked}
              navigation={navigation}
              image={restaurant.image}
              restaurant={restaurant}
            />
          ))}
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home
