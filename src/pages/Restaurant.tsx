import React, { useEffect } from "react"
import { useNavigation, useRoute } from "@react-navigation/core"
import PropTypes from "prop-types"
import { Text, View, StatusBar, Image, SafeAreaView } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import EStyleSheet from "react-native-extended-stylesheet"
import { vw } from "react-native-expo-viewport-units"
import RestaurantItem from "../components/RestaurantItem"
import GoodyBagItem from "../components/GoodyBagItem"
import { images } from "../theme"
import Button from "../components/Button"

const styles = EStyleSheet.create({
  topImage: {
    width: "100%",
    height: vw(50),
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: -10,
  },
  title: {
    fontSize: "1.25rem",
    marginBottom: "1rem",
    marginTop: vw(55),
    fontWeight: "bold",
    width: "100%",
    textAlign: "left",
    paddingHorizontal: vw(10),
  },
  text: {
    fontSize: "1rem",
    marginBottom: "1rem",
    width: "100%",
    textAlign: "left",
    paddingLeft: vw(5),
    fontStyle: "italic",
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
  layer:{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
  },
  typesOptions: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingLeft: vw(6.25),
    paddingRight: vw(6.25),
    boxSixing: "border-box",
    marginBottom: "1rem",
  },
  typeOption: {
    fontSize: "1rem",
    marginBottom: "1rem",
    textAlign: "left",
    paddingLeft: vw(5),
    fontStyle: "italic",
    borderRadius: 10,
    marginRight: vw(5),
  },



})

const Restaurant = ({route, navigation}) => 
{
  const { restaurant } = route.params

  return (
    <View style={styles.root}>
      {/* <Image source={images[restaurant.image]} style={styles.topImage} /> */}
      <View style={styles.main}>
        <View style={styles.top}>
          <Text 
            style={styles.title}
          >{restaurant.name}</Text>
          <Image source={images["bag"]}></Image>
        </View>
        <View style={styles.second}>
          <Text style={styles.text}>{restaurant.time}</Text>
          <Text style={styles.text}>{restaurant.distance}</Text>
          <Text style={styles.text}>{restaurant.type}</Text>
        </View>
        <View style={styles.third}>
          {/* Make the scroll view vertical */}
          <ScrollView 
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          >
          <View style={styles.typesOptions}>
            <Button style={styles.typeOption} title= "Goody Bags" />
            <Button style={styles.typeOption} title= "Food" />
            <Button style={styles.typeOption} title= "Salads" />
            <Button style={styles.typeOption} title= "Sandwiches" />
          </View>
          </ScrollView>
        </View>
        <View style={styles.fourth}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <View style={styles.restrictionGrid}>
              {restaurant.goodyBags.map((goodyBag) => (
                <GoodyBagItem
                  key={goodyBag.name}
                  goodyBag={goodyBag}
                />
              ))}
            </View>
        </ScrollView>
        </View>
      </View>
    </View>
  )
}

// Restaurant.propTypes = {
//   navigation: PropTypes.shape({
//     navigate: PropTypes.func,
//     route: PropTypes.shape({}),
//   }),
// }

// Restaurant.defaultProps = {
//   navigation: { navigate: () => null },
// }

export default Restaurant
