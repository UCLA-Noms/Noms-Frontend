import React from "react"
import PropTypes from "prop-types"
import {
  TouchableOpacity, Text, Image, View,
} from "react-native"
import EStyleSheet from "react-native-extended-stylesheet"
import { images } from "../../theme"

const styles = EStyleSheet.create({
  restaurantName: {
    // textAlign: 'center',
    fontSize: "2rem",
    fontWeight: "bold",
    marginTop: "0.25rem",
  },
  restaurantInfo: {
    fontSize: "1rem",
    // fontWeight: 'bold',
  },
  bubbleInfo: {
    padding: "0.5rem",
    borderRadius: "0.5rem",
  },
  priceBubble: {
    backgroundColor: "aquamarine",
  },
  card: {
    // border: '2px solid red',
    backgroundColor: "white",
    boxSizing: "border-box",
    padding: "1rem",
    paddingBottom: 0,
    width: "100%",
  },
  image: {
    width: "100%",
    height: "10rem",
    // backgroundSize: 'cover',
    borderRadius: "1rem",
    marginBottom: "0.5rem",
  },
})

const RestaurantCard = ({
  navigation,
  restaurantName,
  closingTime,
  price,
  liked,
  rating,
  distance,
  image,
}) => {
  const cardStyle = [styles.card]
  const nameStyle = [styles.restaurantName]
  const infoStyle = [styles.infoStyle]
  const sideInfoStyle = { ...styles.infoStyle, ...styles.bubbleInfo }
  return (
    <TouchableOpacity
      style={cardStyle}
      delayPressIn={250}
      onPress={() => {
        navigation.navigate("Restuarant", { from: "Fun" })
      }}
    >
      <Image style={styles.image} source={images[image]} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 0.5,
          paddingBottom: 0,
          boxSizing: "border-box",
        }}
      >
        <View style={{ flex: 1 }}>
          {closingTime && (
            <Text style={infoStyle}>
              Order by {`${closingTime.getHours()}:${closingTime.getMinutes()}`}
            </Text>
          )}
          {restaurantName && <Text style={nameStyle}>{restaurantName}</Text>}
        </View>
        <View style={{ display: "flex", flexDirection: "column" }}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            {price && (
              <Text
                style={{
                  ...sideInfoStyle,
                  ...styles.priceBubble,
                }}
              >
                {"$".repeat(price)}
              </Text>
            )}

            <TouchableOpacity>
              <Text style={{ ...sideInfoStyle, transform: [{ scale: 1.25 }] }}>
                {!liked ? "🖤" : "💙"}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ display: "flex", flexDirection: "row" }}>
            {distance && <Text style={sideInfoStyle}>{distance} mi</Text>}
            {rating && <Text style={sideInfoStyle}>{rating} ★</Text>}
          </View>
        </View>
      </View>
      {/* {children} */}
    </TouchableOpacity>
  )
}

RestaurantCard.propTypes = {
  // title: PropTypes.string,
  // width: PropTypes.string,
  // height: PropTypes.string,
  // color: PropTypes.string,
  // backgroundColor: PropTypes.string,
  // onPress: PropTypes.func,
  // children: PropTypes.string,
  // textStyle: PropTypes.shape({}),
  // style: PropTypes.shape({}),
  restaurantName: PropTypes.string,
  closingTime: PropTypes.instanceOf(Date),
  price: PropTypes.number,
  liked: PropTypes.bool,
  rating: PropTypes.number,
  distance: PropTypes.number,
}

RestaurantCard.defaultProps = {
  // title: null,
  // width: "auto",
  // height: "auto",
  // color: "black",
  // backgroundColor: "#cacaca",
  // onPress: () => { },
  // children: null,
  // textStyle: {},
  // style: {},
  restaurantName: "",
  closingTime: new Date(),
  price: 0,
  liked: false,
  rating: 0,
  distance: 0,
}

export default RestaurantCard
