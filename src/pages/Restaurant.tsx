import React, { useEffect } from "react"
import { useNavigation, useRoute } from "@react-navigation/core"
import PropTypes from "prop-types"
import { Text, View, StatusBar, Image, SafeAreaView } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import EStyleSheet from "react-native-extended-stylesheet"
import { vw } from "react-native-expo-viewport-units"
import RestaurantItem from "../components/RestaurantItem"
import { images } from "../theme"

const styles = EStyleSheet.create({
  topImage: {
    width: "100%",
    height: vw(50),
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
  infoTextContainer: {
    width: "100%",
    textAlign: "left",
    paddingHorizontal: vw(10),
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

const Restaurant = (bruh) => {
  // const navigation = useNavigation()
  // const route = useRoute()
  // const { params } = route

  // const route = useRoute()
  // const { params } = route.params

  useEffect(() => {
    console.log("Why have you forsaken me, my lord?", bruh)
    // console.log(navigation.getParent().getState().routes)
    // console.log("Restaurant: ", route)
  }, [bruh])
  // const bruh = route?.params?.bruh

  // const { navigate } = navigation

  return (
    <SafeAreaView style={{ backgroundColor: "white" }}>
      <ScrollView>
        <Text>brother</Text>
      </ScrollView>
    </SafeAreaView>
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
