import React from "react"
import PropTypes from "prop-types"
import { TouchableOpacity, Text } from "react-native"

const styles = {
  root: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
  },
}

const Button = ({
  title,
  width,
  height,
  color,
  backgroundColor,
  borderColor,
  borderWidth,
  borderRadius,
  onPress,
  children,
  textStyle,
  style,
}) => {
  const btnStyle = [
    styles.root,
    {
      width,
      height,
      backgroundColor,
      borderColor,
      borderWidth,
      borderRadius,
    },
    style,
  ]
  const txtStyle = [styles.text, { color }, textStyle]
  return (
    <TouchableOpacity onPress={onPress} style={btnStyle}>
      {title && <Text style={txtStyle}>{title}</Text>}
      {children}
    </TouchableOpacity>
  )
}

Button.propTypes = {
  title: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  onPress: PropTypes.func,
  children: PropTypes.string,
  textStyle: PropTypes.shape({}),
  style: PropTypes.shape({}),
}

Button.defaultProps = {
  title: null,
  width: "auto",
  height: "auto",
  color: "black",
  backgroundColor: "#cacaca",
  onPress: () => {
    console.log("Clicked")
  },
  children: null,
  textStyle: {},
  style: {},
}

export default Button
