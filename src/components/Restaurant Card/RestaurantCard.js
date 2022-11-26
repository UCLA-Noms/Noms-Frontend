import React from "react"
import PropTypes from "prop-types"
import {
  TouchableOpacity, Text, Image, View,
} from "react-native"

const styles = {
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
}

const RestaurantCard = ({
  restaurantName,
  closingTime,
  price,
  liked,
  rating,
  distance,
}) => {
  const cardStyle = [styles.card]
  const nameStyle = [styles.restaurantName]
  const infoStyle = [styles.infoStyle]
  const sideInfoStyle = { ...styles.infoStyle, ...styles.bubbleInfo }
  return (
    <TouchableOpacity style={cardStyle} delayPressIn={250}>
      <Image
        style={styles.image}
        source={{
          uri: "https://media.istockphoto.com/id/1018141890/photo/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-afternoon.jpg?s=612x612&w=0&k=20&c=OccJv1oKWSTDqJ6Irw7iW1NEbL0muU2ylqP3EOhOyEg=",
        }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "0.5rem",
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
              <Text style={{ ...sideInfoStyle, transform: "scale(1.25)" }}>
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
  textStyle: PropTypes.shape({}),
  style: PropTypes.shape({}),
}

RestaurantCard.defaultProps = {
  // title: null,
  // width: "auto",
  // height: "auto",
  // color: "black",
  // backgroundColor: "#cacaca",
  // onPress: () => { },
  // children: null,
  textStyle: {},
  style: {},
}

export default RestaurantCard
