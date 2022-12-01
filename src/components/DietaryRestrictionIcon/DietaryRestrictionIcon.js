import React, { useState } from "react"
import PropTypes from "prop-types"
import { TouchableOpacity, Text, View, Image } from "react-native"
import EStyleSheet from "react-native-extended-stylesheet"
import { vw } from "react-native-expo-viewport-units"
import dietaryIcons from "../../theme/dietaryIcons"

const styles = EStyleSheet.create({})

const DietaryRestrictionIcon = ({ restrictionName, size, style }) => {
  return (
    <Image
      style={{ ...style, width: size, height: size, borderRadius: "100%" }}
      source={dietaryIcons[restrictionName]}
    ></Image>
  )
}

DietaryRestrictionIcon.propTypes = {
  title: PropTypes.string,
  value: PropTypes.bool,
  // title: PropTypes.string,
  // width: PropTypes.string,
  // height: PropTypes.string,
  // color: PropTypes.string,
  // backgroundColor: PropTypes.string,
  // onPress: PropTypes.func,
  // children: PropTypes.string,
  // textStyle: PropTypes.shape({}),
  // style: PropTypes.shape({}),
}

DietaryRestrictionIcon.defaultProps = {
  title: "DietToggle",
  value: false,
  // title: null,
  // width: "auto",
  // height: "auto",
  // color: "black",
  // backgroundColor: "#cacaca",
  // onPress: () => {},
  // children: null,
  // textStyle: {},
  // style: {},
}

export default DietaryRestrictionIcon
