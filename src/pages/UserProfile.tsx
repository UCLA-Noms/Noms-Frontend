import React from "react"
import PropTypes from "prop-types"
import { StyleSheet, Text, View, StatusBar } from "react-native"
import { colors } from "../theme"
import Button from "../components/Button"

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

const Me = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.title}>Me</Text>
    <Button
      title="Go to Details"
      color="white"
      backgroundColor={colors.lightPurple}
      onPress={() => {
        navigation.navigate("Details", { from: "Me" })
      }}
      borderColor={undefined}
      borderRadius={undefined}
      borderWidth={undefined}
    />
    <Button
      title="Go to Order History"
      color="white"
      backgroundColor={colors.lightPurple}
      onPress={() => {
        navigation.navigate("OrderHistory", { from: "Me" })
      }}
      borderColor={undefined}
      borderRadius={undefined}
      borderWidth={undefined}
    />
  </View>
)

Me.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Me.defaultProps = {
  navigation: { navigate: () => null },
}

export default Me
