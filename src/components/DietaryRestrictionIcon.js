import React from "react"
import PropTypes from "prop-types"
import { Image } from "react-native"
// import EStyleSheet from "react-native-extended-stylesheet"
// import { vw } from "react-native-expo-viewport-units"
import dietaryIcons from "../theme/dietaryIcons"

const DietaryRestrictionIcon = ({ restrictionName, size, style }) => (
  <Image
    style={{
      ...style,
      width: size,
      height: size,
      borderRadius: size,
    }}
    source={dietaryIcons[restrictionName]}
  />
)

DietaryRestrictionIcon.propTypes = {
  // title: PropTypes.string,
  // value: PropTypes.bool,
  // title: PropTypes.string,
  // width: PropTypes.string,
  // height: PropTypes.string,
  // color: PropTypes.string,
  // backgroundColor: PropTypes.string,
  // onPress: PropTypes.func,
  // children: PropTypes.string,
  // textStyle: PropTypes.shape({}),
  // style: PropTypes.shape({}),
  restrictionName: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.shape({}),
}

DietaryRestrictionIcon.defaultProps = {
  restrictionName: "dairy",
  size: 30,
  style: {},
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
