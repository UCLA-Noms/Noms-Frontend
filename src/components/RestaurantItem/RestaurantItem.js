import React from "react"
import PropTypes from "prop-types"
import { TouchableOpacity, Text, View, Image } from "react-native"
import Button from "../Button"
import DietaryRestrictionIcon from "../DietaryRestrictionIcon"
import { vw } from "react-native-expo-viewport-units"

const styles = {
  root: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
  },
}

const RestaurantItem = ({
  title,
  image,
  price,
  restrictions,
  onPress,
  imageUrl,
}) => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: vw(5),
        // marginBottom: "5vw",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#F6F6F6",
          marginBottom: vw(5),
          padding: vw(2.5),
          borderRadius: 10,
        }}
      >
        <View>
          <Image
            style={{
              width: vw(25),
              height: vw(25),
              borderRadius: 20,
            }}
            source={{
              uri: imageUrl,
            }}
          ></Image>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            paddingLeft: vw(5),
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={{ paddingBottom: vw(2), fontSize: 15, marginTop: vw(2.5) }}
            >
              {title}
            </Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
              {restrictions.map(function (restrictionName, i) {
                return (
                  <DietaryRestrictionIcon
                    restrictionName={restrictionName}
                    size={20}
                    style={{ marginRight: 10, backgroundColor: "white" }}
                  ></DietaryRestrictionIcon>
                )
              })}
            </View>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View style={{ flex: 1 }}></View>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#38B6FF",
                  borderRadius: 5,
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                  // marginRight: "5vw",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Text style={{ color: "white" }}>+ ${price}</Text>
              </View>
            </TouchableOpacity>
            {/* <Button backgroundColor="#38B6FF">+</Button> */}
          </View>
        </View>
      </View>
    </View>
    // <TouchableOpacity onPress={onPress} style={btnStyle}>
    //   {title && <Text style={txtStyle}>{title}</Text>}
    //   {children}
    // </TouchableOpacity>
  )
}

RestaurantItem.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  restrictions: PropTypes.number,
  onPress: PropTypes.func,
}

RestaurantItem.defaultProps = {
  title: null,
  width: "auto",
  height: "auto",
  color: "black",
  backgroundColor: "#cacaca",
  onPress: () => {},
  children: null,
  textStyle: {},
  style: {},
}

export default RestaurantItem
