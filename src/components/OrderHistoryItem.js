import { StyleSheet, Text, View, Image, Button } from "react-native"
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
  info: {
    flex: 1,
    marginLeft: 10,
  },
  restaurant: {
    fontSize: 20,
    fontWeight: "bold",
  },
  date: {
    fontSize: 16,
    fontWeight: "bold",
  },
  status: {
    fontSize: 16,
    fontWeight: "bold",
  },
})

function OrderHistoryItem({ order }) {
  console.log(order)
  return (
    <View style={styles.container}>
      <View style={styles.info}>
        <Text style={styles.restaurant}>{order.restaurant}</Text>
        <Text style={styles.restaurant}>Order #{order.number}</Text>
        {order.items.map((item) => (
          <Text style={styles.restaurant}>{item}</Text>
        ))}
        <Text style={styles.date}>{order.date}</Text>
        <Text style={styles.status}>{order.status}</Text>
      </View>
    </View>
  )
}

OrderHistoryItem.propTypes = {
  order: PropTypes.shape({
    number: PropTypes.number,
    restaurant: PropTypes.string,
    items: [PropTypes.string],
    date: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
}

export default OrderHistoryItem
