import React, { useState } from "react";
import PropTypes from "prop-types";
import { TouchableOpacity, Text, View } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { vw } from "react-native-expo-viewport-units";
import DietaryRestrictionIcon from "../DietaryRestrictionIcon";
import styles from "./DietToggle.css";

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
  const [toggled, setToggled] = useState(value);

  return (
    <TouchableOpacity onPress={() => setToggled(!toggled)}>
      <View style={{ ...styles.container }}>
        <View
          style={{
            padding: 10,
            ...(toggled ? styles.toggledOn : {}),
          }}
        >
          <DietaryRestrictionIcon restrictionName={restrictionName} size={40} />
        </View>

        <Text style={{ ...styles.text }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

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
};

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
};

export default DietToggle;
