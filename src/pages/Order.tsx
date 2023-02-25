import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Text, View, StyleSheet } from "react-native"
import PropTypes from "prop-types"
import { remove, empty, increment, decrement } from "../slices/orders.slice"
import CartItem from "../components/CartItem"
import { colors } from "../theme"
import Button from "../components/Button"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: colors.lightPurple,
    width: "100%",
  },
  total: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
    width: "100%",
    fontWeight: "bold",
  },
  button: {
    marginBottom: 10,
  },
})

const Order = ({ navigation }) => {
  const { items, total } = useSelector((state) => state.orders.cart)
  const dispatch = useDispatch()

  const onIncrement = (id) => {
    dispatch(increment(id))
  }

  const onDecrement = (id) => {
    dispatch(decrement(id))
  }

  const onRemove = (id) => {
    dispatch(remove(id))
  }

  const onEmpty = () => {
    dispatch(empty())
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order</Text>
      {items.map((item) => (
        <CartItem
          item={item}
          key={item.id}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          onRemove={onRemove}
        />
      ))}
      <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
      <View>
        <Button style={styles.button} title="Empty Cart" onPress={onEmpty} />
        <Button
          style={styles.button}
          title="Checkout"
          onPress={() => navigation.navigate("Checkout", { from: "Order" })}
        />
      </View>
    </View>
  )
}

Order.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Order.defaultProps = {
  navigation: { navigate: () => null },
}

export default Order
