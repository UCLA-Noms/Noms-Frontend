import React from "react"
import PropTypes from "prop-types"
import {
  TouchableOpacity, Text, View, Image,
} from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { vw } from "react-native-expo-viewport-units"
// import Button from "../Button"
import { useNavigation } from "@react-navigation/native"
import { append } from "../slices/orders.slice"
import DietaryRestrictionIcon from "./DietaryRestrictionIcon"
import Button from "./Button"
import { colors } from "../theme"

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

const FoodItem = ({
  name,
  restaurant,
  price,
  restrictions,
  pickupTime,
  visible,
  imageURL,
  //   navigation,
}) => {
  function distanceToRestaurant(rest) {
    return 1.5
  }

  const dispatch = useDispatch()
  const navigation = useNavigation()
  const orders = useSelector(state => state.orders)
  return (
    <TouchableOpacity>
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
            backgroundColor: "#FAFAFA",
            marginBottom: vw(5),
            //   padding: vw(2.5),
            overflow: "hidden",
            borderRadius: vw(3),
          }}
        >
          <View>
            <Image
              style={{
                width: vw(25),
                height: vw(25),
                borderRadius: vw(3),
              }}
              source={{
                uri: imageURL,
              }}
            />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              paddingLeft: vw(3),
            }}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  paddingBottom: vw(1),
                  fontSize: vw(4),
                  marginTop: vw(1),
                  fontWeight: "bold",
                }}
              >
                {name}
              </Text>

              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginBottom: vw(1),
                }}
              >
                <View
                  style={{
                    backgroundColor: colors.money,
                    paddingLeft: 5,
                    paddingRight: 5,
                    borderRadius: 5,
                    height: 22,
                    marginRight: vw(2),
                  }}
                >
                  <Text
                    style={{
                      // paddingBottom: vw(1),
                      fontSize: vw(3),
                      // marginTop: vw(1),
                      fontWeight: "bold",
                    }}
                  >
                    ${price}
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: "#99daff",
                    paddingLeft: 5,
                    paddingRight: 5,
                    borderRadius: 5,
                    height: 22,
                    marginRight: vw(2),
                  }}
                >
                  <Text
                    style={{
                      // paddingBottom: vw(1),
                      fontSize: vw(3),
                      // marginTop: vw(1),
                      fontWeight: "bold",
                    }}
                  >
                    {pickupTime.toTimeString().split(" ")[0].slice(0, -3)} PM
                  </Text>
                </View>
                <Text
                  style={{
                    paddingBottom: vw(1),
                    fontSize: vw(3),
                    // marginTop: vw(1),
                    fontWeight: "bold",
                  }}
                >
                  {`📍 ${ distanceToRestaurant(restaurant)}`} mi
                </Text>
              </View>
              <View style={{ display: "flex", flexDirection: "row" }}>
                {restrictions.map(restrictionName => (
                  <DietaryRestrictionIcon
                    key={restrictionName}
                    restrictionName={restrictionName}
                    size={vw(6)}
                    style={{ marginRight: 10, backgroundColor: "white" }}
                  />
                ))}
              </View>
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <View style={{ flex: 1 }} />
              {/* <TouchableOpacity>
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
                        name: name,
                        price,
                        quantity: 1,
                        image: imageURL,
                      }),
                    )
                    navigation.navigate("Order")
                  }}
                  style={{ color: "white" }}
                >
                  + ${price}
                </Text>
              </View>
            </TouchableOpacity> */}
              {/* <Button backgroundColor="#38B6FF">+</Button> */}
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
    // <TouchableOpacity onPress={onPress} style={btnStyle}>
    //   {title && <Text style={txtStyle}>{title}</Text>}
    //   {children}
    // </TouchableOpacity>
  )
}

FoodItem.propTypes = {
  name: PropTypes.string,
  restaurant: PropTypes.string,
  price: PropTypes.number,
  // eslint-disable-next-line
  restrictions: PropTypes.any,
  // eslint-disable-next-line
  pickupTime: PropTypes.any,
  visible: PropTypes.bool,
  imageURL: PropTypes.string,
  // onPress: PropTypes.func,
}

FoodItem.defaultProps = {
  name: "",
  restaurant: "",
  price: 0,
  restrictions: [],
  pickupTime: new Date(),
  visible: true,
  imageURL: "",
  //   title: null,
  // width: "auto",
  // height: "auto",
  // color: "black",
  // backgroundColor: "#cacaca",
  // onPress: () => { },
  // children: null,
  // textStyle: {},
  // style: {},
}

export default FoodItem
