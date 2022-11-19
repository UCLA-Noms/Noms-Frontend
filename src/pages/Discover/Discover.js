import React from "react"
import PropTypes from "prop-types"
import {
  StyleSheet, Text, View, StatusBar,
} from "react-native"
import Button from "components/Button"
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

const Discover = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.title}>Discover</Text>
    <Button
      title="Go to Details"
      color="white"
      backgroundColor={colors.lightPurple}
      onPress={() => {
        navigation.navigate("Details", { from: "Discover" })
      }}
    />
  </View>
)

Discover.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Discover.defaultProps = {
  navigation: { navigate: () => null },
}

export default Discover
