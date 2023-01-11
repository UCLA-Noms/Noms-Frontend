import React from "react"
import PropTypes from "prop-types"
import { StyleSheet, StatusBar, SafeAreaView, Image } from "react-native"
import RestaurantCard from "components/Restaurant Card"
import { ScrollView } from "react-native-gesture-handler"
import { vw } from "react-native-expo-viewport-units"
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

const Home = ({ navigation }) => (
  <SafeAreaView style={styles.root}>
    <StatusBar barStyle="light-content" />
    <ScrollView style={{ width: "100%" }}>
      <Image style={{ width: vw(100), height: vw(30) }} source={images.bruh} />
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

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home
