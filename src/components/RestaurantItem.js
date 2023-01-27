import React from "react"
import PropTypes from "prop-types"
import {
  TouchableOpacity, Text, View, Image,
} from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { vw } from "react-native-expo-viewport-units"
// import Button from "../Button"
import { append } from "../slices/orders.slice"
import DietaryRestrictionIcon from "./DietaryRestrictionIcon"
import Button from "./Button"

// const styles = {
//   root: {
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     borderRadius: 5,
//   },
//   text: {
//     textAlign: "center",
//     fontSize: 16,
//   },
// }

const RestaurantItem = ({
  itemId,
  title,
  // image,
  price,
  restrictions,
  // onPress,
  imageUrl,
  navigation,
}) => {
  const dispatch = useDispatch()
  const orders = useSelector(state => state.orders)
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
          />
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
              {restrictions.map(restrictionName => (
                <DietaryRestrictionIcon
                  key={restrictionName}
                  restrictionName={restrictionName}
                  size={20}
                  style={{ marginRight: 10, backgroundColor: "white" }}
                />
              ))}
            </View>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <View style={{ flex: 1 }} />
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
                <Text
                  onPress={() => {
                    dispatch(
                      append({
                        itemId,
                        name: title,
                        price,
                        quantity: 1,
                        image: imageUrl,
                      }),
                    )
                    navigation.navigate("Order")
                  }}
                  style={{ color: "white" }}
                >
                  + ${price}
                </Text>
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
  // image: PropTypes.string,
  // price: PropTypes.number,
  // restrictions: PropTypes.number,
  // onPress: PropTypes.func,
}

RestaurantItem.defaultProps = {
  title: null,
  // width: "auto",
  // height: "auto",
  // color: "black",
  // backgroundColor: "#cacaca",
  // onPress: () => { },
  // children: null,
  // textStyle: {},
  // style: {},
}

export default RestaurantItem
