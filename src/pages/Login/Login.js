import React from "react"
import PropTypes from "prop-types"
import {
  StyleSheet, Text, View, StatusBar,
} from "react-native"
import { colors } from "theme"

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

const Login = ({ navigation }) => (
  <View
    style={styles.root}
    onTouchStart={() => navigation.navigate("PFPSelector")}
  >
    <StatusBar barStyle="light-content" />
    <Text style={styles.title}>Login</Text>
  </View>
)

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Login.defaultProps = {
  navigation: { navigate: () => null },
}

export default Login
