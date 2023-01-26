import React, { useState } from "react"
import PropTypes from "prop-types"
import { StyleSheet, StatusBar, SafeAreaView, Image, TextInput, View, Button } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { vw } from "react-native-expo-viewport-units"
import RestaurantCard from "../components/RestaurantCard"
import { images } from "../theme"
import { SearchBar } from '@rneui/themed'

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
  return (
    <SafeAreaView style={styles.root}>
      <StatusBar barStyle="light-content" />
      <ScrollView style={{ width: "100%" }}>
        {/* <Image style={{ width: vw(100), height: vw(30) }} source={images.bruh} /> */}
        <View
          style={{ borderRadius: 10, padding: 10, margin: 20, borderWidth: 1, flexDirection: "row", justifyContent: "space-between" }}>
          <TextInput
            style={{ flexGrow: 1, width: "80%", height: "100%" }}
            onChangeText={(text) => setSearch(text)}
            onSubmitEditing={() => console.log("searching for " + searchText)}
            value={searchText}
          />
          <Button title={'test'} />
        </View>
        <RestaurantCard
          restaurantName="Drey"
          closingTime={new Date()}
          rating={2.3}
          price={4}
          distance={1.5}
          liked={false}
          navigation={navigation}
          image="rListing4"
        />
        <RestaurantCard
          restaurantName="Egg Tuck"
          closingTime={new Date()}
          rating={2.3}
          price={4}
          distance={1.5}
          liked={false}
          image="rListing1"
        />
        <RestaurantCard
          restaurantName="Le Pain Quotidien"
          closingTime={new Date()}
          rating={2.3}
          price={4}
          distance={1.5}
          liked={false}
          image="rListing2"
        />
        <RestaurantCard
          restaurantName="Restaurant 4"
          closingTime={new Date()}
          rating={2.3}
          price={4}
          distance={1.5}
          liked={false}
          image="rListing3"
        />
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
