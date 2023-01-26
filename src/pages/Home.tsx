import React, { useState } from "react"
import PropTypes from "prop-types"
import { StyleSheet, StatusBar, SafeAreaView, Image, TextInput, View, Button, TouchableOpacity } from "react-native"
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
  const [visibleRestaurants, setVisible] = React.useState([true, true, true, true])
  const restaurantNames = ["Drey", "Egg Tuck", "Le Pain Quotidien", "Restaurant 4"]

  const search = (query) => { //TEMPORARY: searches for occurrence(s) of query in restaurant names
    const newVisible = [];
    const re = new RegExp(query, "i"); //case insensitive
    for (var i = 0; i < restaurantNames.length; i++) {
      if (re.test(restaurantNames[i])) {
        newVisible.push(true);
      } else {
        newVisible.push(false);
      }
    }
    setVisible(newVisible);
  }

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" />
      <ScrollView style={{ width: "100%" }}>
        {/* <Image style={{ width: vw(100), height: vw(30) }} source={images.bruh} /> */}
        <View
          style={{ flex: 1, borderRadius: 10, padding: 10, margin: 20, borderWidth: 1, flexDirection: "row", justifyContent: "space-between" }}>
          <TextInput
            style={{ flexGrow: 1, width: "80%", height: "100%", fontSize: 20 }}
            onChangeText={(text) => { setSearch(text); search(text); /* TODO: search every time query in searchbar is changed? */ }}
            onSubmitEditing={() => search(searchText) /* TODO: search only when user submits search query? */}
            value={searchText}
            placeholder={"Search Bar"}
          />
          {/*<Button title={'test'} />*/}
          <TouchableOpacity>
            <Image source={images.slider} style={{ height: "100%", width: undefined, aspectRatio: 1 }} />
          </TouchableOpacity>
        </View>
        {visibleRestaurants[0] ? <RestaurantCard
          restaurantName={restaurantNames[0]}
          closingTime={new Date()}
          rating={2.3}
          price={4}
          distance={1.5}
          liked={false}
          navigation={navigation}
          image="rListing4"
        /> : null}
        {visibleRestaurants[1] ? <RestaurantCard
          restaurantName={restaurantNames[1]}
          closingTime={new Date()}
          rating={2.3}
          price={4}
          distance={1.5}
          liked={false}
          image="rListing1"
        /> : null}
        {visibleRestaurants[2] ? <RestaurantCard
          restaurantName={restaurantNames[2]}
          closingTime={new Date()}
          rating={2.3}
          price={4}
          distance={1.5}
          liked={false}
          image="rListing2"
        /> : null}
        {visibleRestaurants[3] ? <RestaurantCard
          restaurantName={restaurantNames[3]}
          closingTime={new Date()}
          rating={2.3}
          price={4}
          distance={1.5}
          liked={false}
          image="rListing3"
        /> : null}
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
