import {
  StyleSheet, Text, View, Image, Button,
} from "react-native"
import PropTypes from "prop-types"

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  image: {
    width: 100,
    height: 100,
  },
  info: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
  },
  quantity: {
    fontSize: 16,
    fontWeight: "bold",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // add space between buttons
    width: 100,
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    // add space between buttons
  },
})

function CartItem({
  item, onIncrement, onDecrement, onRemove,
}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
      </View>
      <View style={styles.actions}>
        <Button
          style={styles.button}
          title="+"
          onPress={() => onIncrement(item.id)}
        />
        <Button
          style={styles.button}
          title="-"
          onPress={() => onDecrement(item.id)}
        />
        <Button
          style={styles.button}
          title="X"
          onPress={() => onRemove(item.id)}
        />
      </View>
    </View>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    quantity: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
}

export default CartItem
