import {
  Text, View, Image, Button,
} from "react-native"
import styles from "./CartItem.css"
import PropTypes from "prop-types"

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
