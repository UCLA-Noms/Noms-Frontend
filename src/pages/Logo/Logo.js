import React from "react"
import PropTypes from "prop-types"
import { StyleSheet, View, Image } from "react-native"
import { colors, images } from "theme"

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
})

const Logo = ({ navigation }) => (
  // Hacky solution is to apply both an onClick and onTouchStart, but this is not ideal
  <View
    style={styles.root}
    onClick={() => navigation.navigate("Login")}
    onTouchStart={() => navigation.navigate("Login")}
  >
    <Image style={styles.image} source={images.logo_lg} />
  </View>
)

Logo.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Logo.defaultProps = {
  navigation: { navigate: () => null },
}

export default Logo
