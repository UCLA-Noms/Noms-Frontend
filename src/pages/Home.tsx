import React, { useState } from "react"
import PropTypes from "prop-types"
import {
  StyleSheet, StatusBar, SafeAreaView, Image, TextInput, View, Button, TouchableOpacity,
} from "react-native"
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

  const [searchText, setSearch] = React.useState("")
  const [restaurants, setRestaurants] = React.useState([
    { name: "Drey", visible: true },
    { name: "Egg Tuck", visible: true },
    { name: "Le Pain Quotidien", visible: true },
    { name: "Restaurant 4", visible: true }
  ])

  const search = (query) => { // TEMPORARY: searches for occurrence(s) of query in restaurant names
    const newVisible = [...restaurants]
    const re = new RegExp(query, "i") // case insensitive
    for (let i = 0; i < restaurants.length; i += 1) {
      if (re.test(restaurants[i].name)) {
        newVisible[i].visible = true
      } else {
        newVisible[i].visible = false
      }
    }
    setRestaurants(newVisible)
  }

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" />
      <ScrollView style={{ width: "100%" }}>
        {/* <Image style={{ width: vw(100), height: vw(30) }} source={images.bruh} /> */}
        <View
          style={{
            flex: 1, borderRadius: 10, padding: 10, margin: 20, borderWidth: 1, flexDirection: "row", justifyContent: "space-between",
          }}
        >
          <TextInput
            style={{
              flexGrow: 1, width: "80%", height: "100%", fontSize: 20,
            }}
            onChangeText={(text) => { setSearch(text); search(text) /* TODO: search every time query in searchbar is changed? */ }}
            onSubmitEditing={() => search(searchText) /* TODO: search only when user submits search query? */}
            value={searchText}
            placeholder="Search Bar"
          />
          {/* <Button title={'test'} /> */}
          <TouchableOpacity>
            <Image source={images.slider} style={{ height: "100%", width: undefined, aspectRatio: 1 }} />
          </TouchableOpacity>
        </View>
        {restaurants.map((rest) =>
        (rest.visible ?
          <RestaurantCard
            restaurantName={rest.name}
            closingTime={new Date()}
            rating={2.3}
            price={4}
            distance={1.5}
            liked={false}
            navigation={navigation}
            image="rListing4" /> : null
        ))}
      </ScrollView>
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
