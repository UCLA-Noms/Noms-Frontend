import React, { useState } from "react"
import PropTypes from "prop-types"
import { TouchableOpacity, Text, View } from "react-native"
import EStyleSheet from "react-native-extended-stylesheet"
import { vw } from "react-native-expo-viewport-units"
import DietaryRestrictionIcon from "../DietaryRestrictionIcon"

const styles = EStyleSheet.create({
  root: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  text: {
    textAlign: "center",
    fontSize: 13,
    // marginTop: "0.5rem",
    borderRadius: "0.5rem",
    padding: 5,
  },
  container: {
    backgroundColor: "transparent",
    borderRadius: "0.5rem",
    width: vw(25),
    height: vw(25),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  toggledOn: {
    backgroundColor: "#CBE6FF",
    // outline: "0.5rem solid powderblue",
    // border: "0.5rem solid powderblue",
    padding: 10,
    borderRadius: "100%",
    // boxSizing: "content-box",
  },
})

const DietToggle = ({
  title,
  restrictionName,
  value,
  // handleChange,
  // onPress,
  // children,
  // textStyle,
  // style,
}) => {
  const [toggled, setToggled] = useState(value)

  return (
    <TouchableOpacity onPress={() => setToggled(!toggled)}>
      <View style={{ ...styles.container }}>
        <View
          style={{
            padding: 10,
            ...(toggled ? styles.toggledOn : {}),
          }}
        >
          <DietaryRestrictionIcon
            restrictionName={restrictionName}
            size={40}
          ></DietaryRestrictionIcon>
        </View>

        <Text style={{ ...styles.text }}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

DietToggle.propTypes = {
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

DietToggle.defaultProps = {
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

export default DietToggle
