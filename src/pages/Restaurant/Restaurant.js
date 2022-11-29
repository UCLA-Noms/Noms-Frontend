import React from "react"
import PropTypes from "prop-types"
import { Text, View, StatusBar, Image, SafeAreaView } from "react-native"
import Button from "components/Button"
import { ScrollView } from "react-native-gesture-handler"
import EStyleSheet from "react-native-extended-stylesheet"
import { vw } from "react-native-expo-viewport-units"
import DietToggle from "../../components/Diet Toggle"
import RestaurantItem from "../../components/RestaurantItem"

const styles = EStyleSheet.create({
  topImage: {
    width: "100%",
    height: "50vw",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -10,
  },
  root: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
    marginTop: "30vw",
    fontWeight: "bold",
    width: "100%",
    textAlign: "left",
    paddingHorizontal: "10vw",
  },
  text: {
    fontSize: "1rem",
    marginBottom: "1rem",
    width: "100%",
    textAlign: "left",
    paddingLeft: "5vw",
  },
  infoTextContainer: {
    width: "100%",
    textAlign: "left",
    paddingHorizontal: "10vw",
    display: "flex",
    flexDirection: "row",
  },
  restrictionGrid: {
    // display: "grid",
    // gridTemplateColumns: "1fr 1fr 1fr",
    // width: "100%",
    // paddingLeft: vw(6.25),
    // paddingRight: vw(6.25),
    // boxSixing: "border-box",
    // justifyContent: "space-between",
    // gridGap: vw(6.25),
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    padding: vw(6.25),
  },
  image: {
    width: vw(30),
    height: vw(30),
  },
})

const Restaurant = () => (
  <SafeAreaView style={{ backgroundColor: "white" }}>
    <ScrollView>
      <View style={styles.root}>
        <Image
          style={{ ...styles.topImage }}
          source={{
            uri: "https://www.cookwithmanali.com/wp-content/uploads/2021/03/Vegan-Mapo-Tofu-500x500.jpg",
          }}
        ></Image>
        <View
          style={{
            ...styles.topImage,
            background: "linear-gradient(#DDDDDD33, white)",
            outline: "3px solid white",
          }}
        ></View>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>The Drey</Text>
        <View style={{ ...styles.infoTextContainer }}>
          <Text>ICON</Text>
          <Text style={styles.text}>Drey Menu Perishable Items</Text>
        </View>
        <View style={{ ...styles.infoTextContainer }}>
          <Text>ICON</Text>
          <Text style={styles.text}>Collection: 8:50 PM - 9:00 PM</Text>
        </View>
        <View style={{ ...styles.infoTextContainer }}>
          <Text>ICON</Text>
          <Text style={styles.text}>Open now</Text>
        </View>
        <RestaurantItem
          title="Mapo Tofu"
          restrictions={5}
          price={5.99}
        ></RestaurantItem>
        <RestaurantItem
          title="Drey Item"
          restrictions={2}
          price={6.99}
        ></RestaurantItem>
        <RestaurantItem
          title="Bulgogi Bento"
          restrictions={3}
          price={10.99}
        ></RestaurantItem>
        <RestaurantItem
          title="Mapo Tofu"
          restrictions={5}
          price={5.99}
        ></RestaurantItem>
        <RestaurantItem
          title="Drey Item"
          restrictions={2}
          price={6.99}
        ></RestaurantItem>
        <RestaurantItem
          title="Bulgogi Bento"
          restrictions={3}
          price={10.99}
        ></RestaurantItem>
        <RestaurantItem
          title="Mapo Tofu"
          restrictions={5}
          price={5.99}
        ></RestaurantItem>
        <RestaurantItem
          title="Drey Item"
          restrictions={2}
          price={6.99}
        ></RestaurantItem>
        <RestaurantItem
          title="Bulgogi Bento"
          restrictions={3}
          price={10.99}
        ></RestaurantItem>
        <RestaurantItem
          title="Mapo Tofu"
          restrictions={5}
          price={5.99}
        ></RestaurantItem>
        <RestaurantItem
          title="Drey Item"
          restrictions={2}
          price={6.99}
        ></RestaurantItem>
        <RestaurantItem
          title="Bulgogi Bento"
          restrictions={3}
          price={10.99}
        ></RestaurantItem>
      </View>
    </ScrollView>
  </SafeAreaView>
)

Restaurant.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Restaurant.defaultProps = {
  navigation: { navigate: () => null },
}

export default Restaurant
