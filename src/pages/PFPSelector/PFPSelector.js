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

const PFPSelector = ({ navigation }) => (
  <View style={styles.root} onTouchStart={() => navigation.navigate("Home")}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.title}>PFPSelector</Text>
  </View>
)

PFPSelector.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

PFPSelector.defaultProps = {
  navigation: { navigate: () => null },
}

export default PFPSelector
