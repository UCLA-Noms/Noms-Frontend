import React, { useState } from "react"
import PropTypes from "prop-types"
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
  TextInput,
  Text,
  View,
  TouchableOpacity,
} from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { vw, vh } from "react-native-expo-viewport-units"
import RestaurantCard from "../components/RestaurantCard"
import { images } from "../theme"
import Button from "../components/Button"

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
  header:{
    width: "100%",
  },
  topHalf: {
    paddingHorizontal: vw(5),
    paddingVertical: vw(5),
  },
  filters: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  priceFilter: {
    backgroundColor: "#DCEEF3",
    borderRadius: 10,
    color: "#38B6FF",
    fontWeight: "bold",
    paddingHorizontal: vw(4),
    paddingVertical: vw(4),
  },
  likedFilter: {
    backgroundColor: "#DCEEF3",
    borderRadius: 10,
    color: "#38B6FF",
    fontWeight: "bold",
    paddingHorizontal: vw(4),
    paddingVertical: vw(4),
  },
  pickUpTime: {
    textAlign: "center",
    verticalAlign: "middle",
    backgroundColor: "#DCEEF3",
    paddingHorizontal: vw(4),
    paddingVertical: vw(2),
    borderRadius: 10,
  },
  pickUpTimeText: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  pickUpTimeTime: {
    fontSize: 12,
    color: "#38B6FF",
    fontWeight: "bold",
    textAlign: "center",
  },
  searchBar: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: vw(5),
    paddingVertical: vw(2),
    backgroundColor: "#DCEEF3",
    borderRadius: 10,
    marginTop: vw(5),
  },
})

const Home = ({ navigation }) => {
  const restaurantsList = [
    {
      name: "Le Pain Quotidien",
      closingTime: `${new Date().getHours()}:${new Date().getMinutes()}`,
      rating: 2.3,
      price: 4,
      liked: false,
      time: "20-30 min",
      type: "Cafe",
      distance: "0.9 mi",
      image: "lePainQuotidien",
      ucla: false,
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
      closingTime: `${new Date().getHours()}:${new Date().getMinutes()}`,
      rating: 1.3,
      price: 2,
      liked: true,
      time: "20-30 min",
      type: "Fish",
      distance: "0.9 mi",
      image: "drey",
      ucla: true,
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
      closingTime: `${new Date().getHours()}:${new Date().getMinutes()}`,
      rating: 3.3,
      price: 3,
      liked: false,
      time: "20-30 min",
      type: "Egg",
      distance: "0.9 mi",
      image: "eggTuck",
      ucla: false,
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
      closingTime: `${new Date().getHours()}:${new Date().getMinutes()}`,
      rating: 3.3,
      price: 3,
      liked: false,
      time: "20-30 min",
      type: "hall",
      distance: "0.9 mi",
      image: "rListing1",
      ucla: false,
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

  const [searchText, setSearch] = React.useState("")

  const [restaurantsState, setRestaurantsState] = React.useState(
    restaurantsList.map((restaurant) => ({
      ...restaurant,
      visible: true,
    })),
  )

  const [uclaVisible, setUclaVisible] = React.useState(false)
  

  const search = (query) => {
    // TEMPORARY: searches for occurrence(s) of query in restaurant names
    const newVisible = [...restaurantsState]
    const re = new RegExp(query, "i") // case insensitive
    for (let i = 0; i < restaurantsState.length; i += 1) {
      if (re.test(restaurantsState[i].name)) {
        newVisible[i].visible = true
      } else {
        newVisible[i].visible = false
      }
    }
    setRestaurantsState(newVisible)
  }


  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header}>
        <StatusBar barStyle="light-content" />
        <View style={styles.topHalf}>
          <View style={styles.filters}>
            <Button
              style={styles.priceFilter}
              title="< $5"
              onPress={() => {
                console.log("Pressed < $5")
              }}
            />
            <TouchableOpacity style={styles.pickUpTime}>
              <Text style={styles.pickUpTimeText}>Pickup Time</Text>
              <Text style={styles.pickUpTimeTime}>8:00 PM</Text>
            </TouchableOpacity>
            <Button
              style={styles.likedFilter}
              title="<3"
              onPress={() => {
                console.log("Pressed <3")
              }}
            />
            </View>
            <TextInput
            style={styles.searchBar}
            onChangeText={(text) => {
              setSearch(text)
              search(
                text,
              ) /* TODO: search every time query in searchbar is changed? */
            }}
            onSubmitEditing={
              () =>
                search(
                  searchText,
                ) /* TODO: search only when user submits search query? */
            }
            value={searchText}
            placeholder="Search :)"
          />
          {/* Add Tabs */}
          <View style={{
            flexDirection: "row",
          }}>
                <Button 
                    style={{
                    width: vw(50),
                    }} 
                    title="Westwood" onPress={() => setUclaVisible(false)} />
                <Button 
                    style={{
                        width: vw(50),
                    }}
                    title="UCLA" onPress={() => setUclaVisible(true)} />
          </View>
    
          <ScrollView style={
            uclaVisible ? { display: "none" } : { display: "flex",  height: vh(70)}
        }>
        {/* <Image style={{ width: vw(100), height: vw(30) }} source={images.bruh} /> */}


        {restaurantsState.map((restaurant, index) => 
           restaurant.visible? (<RestaurantCard
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
              onPress={() => {
                navigation.navigate("Restaurant", {
                  restaurant,
                })
              }}
            />)
            : null)}
          </ScrollView>
      

          <ScrollView style={
            uclaVisible ? { display: "flex" } : { display: "none" }
        }>
        {/* <Image style={{ width: vw(100), height: vw(30) }} source={images.bruh} /> */}

        {restaurantsState.map((rest) =>
          rest.visible ? (
            <RestaurantCard
              restaurantName={rest.name}
              closingTime={`${new Date().getHours()}:${new Date().getMinutes()}`}
              rating={2.3}
              price={4}
              distance={1.5}
              liked={false}
              navigation={navigation}
              image="rListing4"
            />
          ) : null,
        )}
          </ScrollView>

          
        </View>
      </View>

    </SafeAreaView>
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
