import React from "react"
import PropTypes from "prop-types"
import {
  StyleSheet, View, StatusBar, Image,
} from "react-native"
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
})

const Logo = ({ navigation }) => (
  <View style={styles.root} onTouchStart={() => navigation.navigate("Login")}>
    <StatusBar barStyle="light-content" />
    <Image source={images.logo_lg} style={styles.logo} />
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
