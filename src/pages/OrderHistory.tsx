import React from "react"
import PropTypes from "prop-types"
import { StyleSheet, Text, View, StatusBar } from "react-native"
import { colors } from "../theme"
import OrderHistoryItem from "../components/OrderHistoryItem"
import Button from "../components/Button"

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    paddingTop: 15,
  },
})

const orderHistory = [
  {
    number: 1001,
    restaurant: "Justin's Pizzeria",
    items: ["Pepperoni Pizza", "Chicken Wings"],
    date: new Date().toLocaleDateString("en-US"),
    status: "In progress...",
  },
  {
    number: 1000,
    restaurant: "Jason's Hawaiian BBQ",
    items: ["Hawaiian BBQ Chicken", "Shaved Ice"],
    date: "1/26/2023",
    status: "Nommed",
  },
  {
    number: 1002,
    restaurant: "Cami's Sushi",
    items: ["California Rolls", "Mystery Bento"],
    date: "1/01/2023",
    status: "Nommed",
  },
]

const OrderHistory = ({ route, navigation }) => (
  <View style={styles.root}>
    <Text style={styles.title}>Order History</Text>
    <Button
      title="Go Back"
      color="white"
      backgroundColor={colors.pink}
      onPress={navigation.goBack}
    />
    {orderHistory.map((order) => (
      <OrderHistoryItem key={order.number} order={order} />
    ))}
  </View>
)

OrderHistory.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    goBack: PropTypes.func,
  }),
}

OrderHistory.defaultProps = {
  route: { params: { from: "" } },
  navigation: { goBack: () => null },
}

export default OrderHistory
