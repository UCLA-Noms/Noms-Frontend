import { React } from "react"
import {
  StyleSheet, Text, View, TextInput,
} from "react-native"
import { useSelector } from "react-redux"
import PropTypes from "prop-types"
import { colors } from "../theme"
import Button from "../components/Button"
// import { CardField } from "@stripe/stripe-react-native"
// , StripeProvider } from "@stripe/stripe-react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  text: {
    color: colors.black,
    fontSize: 20,
    width: 300,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    margin: 12,
    width: 300,
    borderWidth: 1,
    padding: 10,
  },
  card: {
    backgroundColor: colors.white,
    textColor: colors.black,
  },
  cardContainer: {
    height: 50,
    width: 300,
    marginVertical: 30,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: "center",
    backgroundColor: colors.lightPurple,
    width: "100%",
  },
  button: {
    marginTop: 5,
    marginBottom: 5,
    // make the width wrap
  },
})

const Checkout = ({ navigation }) => {
  const { total } = useSelector(state => state.orders.cart)
  // const [name, setName] = useState("")
  // const [email, setEmail] = useState("")

  /*
  const [cardDetails, setCardDetails] = useState({
    card: {
      number: "4242424242424242",
      expMonth: 12,
      expYear: 24,
      cvc: "123",
    },
  })
  */

  /*
  const { confirmPayment, loading } = useConfirmPayment()
  */
  // const { initPaymentSheet, presentPaymentSheet } = useStripe()

  /*
  const handlePayPress = async () => {
    if (!loading) {
      const { error, paymentIntent } = await confirmPayment(cardDetails, {
        type: "Card",
      })
      if (error) {
        console.log("Error code", error.code)
        console.log("Error message", error.message)
      } else if (paymentIntent) {
        console.log("Success")
      }
    }
  }
  */

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      {/* <StripeProvider
        style={styles.card}
        publishableKey="pk_test_51M3rNtLaqPALNWaMfpTmVupdULjycU7wBCH3lQoD2q2Pn72d7pc4pWpVeVqx7RA29S0InIm2vg9B9LJWe2oY8t7T00qdfkrga4"
        urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
        merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
      > */}
      <View>
        <TextInput
          placeholder="Name"
          keyboardType="default"
          // onChange={(e) => setName(e.nativeEvent.text)}
          style={styles.input}
        />
        <TextInput
          placeholder="E-mail"
          keyboardType="email-address"
          // onChange={(e) => setEmail(e.nativeEvent.text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Phone"
          keyboardType="phone-pad"
          // onChange={(e) => setPhone(e.nativeEvent.text)}
          style={styles.input}
        />
        {/* <CardField
          postalCodeEnabled
          placeholder={{
            number: "1234 1234 1234 1234",
            postalCode: "123456",
            cvc: "123",
            expiration: "12/34",
          }}

          onCardChange={(cardDetails) => {
            // Call the callback with the card details
          }}

          cardStyle={styles.card}
          style={styles.cardContainer}
        /> */}
      </View>
      <Text style={styles.text}>Total: ${total}</Text>
      <Button
        variant="primary"
        style={styles.button}
        // onPress={handlePayPress}
        title="Pay"
        // loading={loading}
      />
      <Button
        variant="secondary"
        style={styles.button}
        title="Review Order"
        onPress={() => navigation.navigate("Order")}
      />
      {/* </StripeProvider> */}
    </View>
  )
}

Checkout.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Checkout.defaultProps = {
  navigation: { navigate: () => null },
}

export default Checkout
