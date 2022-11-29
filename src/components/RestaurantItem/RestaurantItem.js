import React from "react"
import PropTypes from "prop-types"
import { TouchableOpacity, Text, View, Image } from "react-native"
import Button from "../Button"

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

const RestaurantItem = ({ title, image, price, restrictions, onPress }) => {
  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: "5vw",
        // marginBottom: "5vw",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#F6F6F6",
          marginBottom: "5vw",
          padding: "5vw",
          borderRadius: 10,
        }}
      >
        <View>
          <Image
            style={{
              width: "20vw",
              height: "20vw",
              borderRadius: 20,
            }}
            source={{
              uri: "https://www.cookwithmanali.com/wp-content/uploads/2021/03/Vegan-Mapo-Tofu-500x500.jpg",
            }}
          ></Image>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            paddingLeft: "5vw",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ paddingBottom: "2vw", fontSize: "1rem" }}>
              {title}
            </Text>
            <View style={{ display: "flex", flexDirection: "row" }}>
              {[...Array(restrictions)].map(function (e, i) {
                return (
                  <View
                    key={i}
                    style={{
                      ...{
                        width: 20,
                        height: 20,
                        borderRadius: "100%",
                        borderWidth: "2px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        marginRight: "2vw",
                      },
                    }}
                  >
                    {i}
                  </View>
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
