import { Text, TextInput, View } from "react-native"
import Button from "./Button"

function PaymentPopup() {
  return (
    <View>
      <Text>Add form of payment</Text>
      <TextInput placeholder="0000 0000 0000 0000" />
      <Text>Expiration Date</Text>
      <TextInput placeholder="MM" />
      <Text>/</Text>
      <TextInput placeholder="YYYY" />
      <Text>Security code</Text>
      <TextInput placeholder="CVV" />
      <Text>Zip code</Text>
      <TextInput placeholder="00000" />
      <Button title="Save" />
    </View>
  )
}

export default PaymentPopup
