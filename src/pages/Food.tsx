import React, { useState } from "react"
import PropTypes from "prop-types"
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Text,
} from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { vw } from "react-native-expo-viewport-units"
import RestaurantCard from "../components/RestaurantCard"
import { images } from "../theme"
import FoodItem from "../components/FoodItem"

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

const Food = ({ navigation }) => {
  const [searchText, setSearch] = React.useState("")
  const [items, setItems] = React.useState([
    {
      name: "Fettuccine Alfredo",
      visible: true,
      price: 10,
      restaurant: "Cheesecake Factory",
      pickupTime: new Date(),
      restrictions: ["vegan", "vegetarian", "eggs", "grain"],
      imageURL:
        "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
    },
    {
      name: "Fettuccine Alfredo",
      visible: true,
      price: 10,
      restaurant: "Cheesecake Factory",
      pickupTime: new Date(),
      restrictions: ["vegan", "vegetarian"],
      imageURL:
        "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
    },
    {
      name: "Bread",
      visible: true,
      price: 10,
      restaurant: "Cheesecake Factory",
      pickupTime: new Date(),
      restrictions: ["vegan", "vegetarian"],
      imageURL:
        "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
    },
    {
      name: "Sandwich",
      visible: true,
      price: 10,
      restaurant: "Cheesecake Factory",
      pickupTime: new Date(),
      restrictions: ["vegan", "vegetarian"],
      imageURL:
        "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
    },
    {
      name: "Sandwich",
      visible: true,
      price: 10,
      restaurant: "Cheesecake Factory",
      pickupTime: new Date(),
      restrictions: ["vegan", "vegetarian"],
      imageURL:
        "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
    },
    {
      name: "Sandwich",
      visible: true,
      price: 10,
      restaurant: "Cheesecake Factory",
      pickupTime: new Date(),
      restrictions: ["vegan", "vegetarian"],
      imageURL:
        "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
    },
    {
      name: "Sandwich",
      visible: true,
      price: 10,
      restaurant: "Cheesecake Factory",
      pickupTime: new Date(),
      restrictions: ["vegan", "vegetarian"],
      imageURL:
        "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
    },
    {
      name: "Sandwich",
      visible: true,
      price: 10,
      restaurant: "Cheesecake Factory",
      pickupTime: new Date(),
      restrictions: ["vegan", "vegetarian"],
      imageURL:
        "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
    },
  ])

  const search = (query) => {
    // TEMPORARY: searches for occurrence(s) of query in restaurant names
    const newVisible = [...items]
    const re = new RegExp(query, "i") // case insensitive
    for (let i = 0; i < items.length; i += 1) {
      if (re.test(items[i].name)) {
        newVisible[i].visible = true
      } else {
        newVisible[i].visible = false
      }
    }
    setItems(newVisible)
  }

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" />
      <ScrollView style={{ width: "100%" }}>
        {/* <Image style={{ width: vw(100), height: vw(30) }} source={images.bruh} /> */}
        <View
          style={{
            flex: 1,
            borderRadius: 10,
            flexDirection: "row",
            // justifyContent: "space-between",
            justifyContent: "center",

            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
          }}
        >
          <Text
            style={{
              // paddingBottom: vw(2),
              fontSize: 16,
              // marginTop: vw(1),
              // fontWeight: "bold",
            }}
          >
            Food Near
          </Text>
          <View
            style={{
              borderColor: "black",
              borderRadius: 5,
              borderWidth: 1,
              borderStyle: "solid",
              // flexGrow: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              marginLeft: 10,
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            {/* eslint-disable-next-line */}
            <Text style={{ marginRight: 5 }}>{"📍"}</Text>
            <TextInput defaultValue="UCLA" style={{}}></TextInput>
            {/* <Text style={{ fontSize: 16 }}>{"📍"} UCLA</Text> */}
          </View>
        </View>
        <View
          style={{
            flex: 1,
            borderRadius: 10,
            padding: 10,
            margin: 20,
            borderWidth: 1,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TextInput
            style={{
              flexGrow: 1,
              width: "80%",
              height: "100%",
              fontSize: 16,
            }}
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
            placeholder="search..."
          />
          {/* <Button title={'test'} /> */}
          <TouchableOpacity>
            <Image
              source={images.slider}
              style={{ height: "100%", width: undefined, aspectRatio: 1 }}
            />
          </TouchableOpacity>
        </View>
        {items.map((item) => (item.visible ? <FoodItem {...item} /> : null))}
      </ScrollView>
    </SafeAreaView>
  )
}

Food.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Food.defaultProps = {
  navigation: { navigate: () => null },
}

export default Food
