import React from "react"
import PropTypes from "prop-types"
import { StyleSheet, Text, View, StatusBar } from "react-native"
import { colors } from "../theme"
import Button from "../components/Button"
import OrderHistoryItem from "../components/OrderHistoryItem"

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

let orderHistory = [
  {
    number: 1000,
    restaurant: "Jason's Hawaiian BBQ",
    items: ["Hawaiian BBQ Chicken", "Shaved Ice"],
    date: "01/01/2023",
    status: "Nommed",
  },
]

const OrderHistory = ({ route, navigation }) => {
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Order History</Text>
      {orderHistory.map((order) => (
        <OrderHistoryItem key={order.number} order={order}></OrderHistoryItem>
      ))}
    </View>
  )
}

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
