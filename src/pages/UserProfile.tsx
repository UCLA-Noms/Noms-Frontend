import React from "react"
import PropTypes from "prop-types"
import { StyleSheet, Text, View, StatusBar, Image } from "react-native"
import Button from "../components/Button"
import { TouchableOpacity } from "react-native-gesture-handler"
import { colors, images } from "../theme"
import PFP from "../components/PFP"
import DietaryRestrictionIcon from "../components/DietaryRestrictionIcon"
import { logout } from "../backend/authfunctions"

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 24,
    // marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
    color: colors.gray,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 20,
  },
  dietaryRestrictions: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
  },
  PFPContainer: {
    position: "relative",
    width: 120,
    height: 100,
    marginBottom: 20,
  },
  editPFPButton: {
    // position: "absolute",
    // right: 0,
    // bottom: 0,
    marginTop: -20,
    // backgroundColor: "red",
    zIndex: 100,
    width: 30,
  },
})

const Me = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.title}>NOMS</Text>
    <View style={styles.PFPContainer}>
      <PFP image={1} size={100} />
      <TouchableOpacity style={styles.editPFPButton}>
        <Text>
          {/* <span role="img" aria-label="pencil"> */}
          {/* // eslint-disable-next-line */}
          ✏️
          {/* </span> */}
        </Text>
      </TouchableOpacity>
    </View>
    <Text style={styles.title}>Your Name</Text>
    <Text style={styles.subtitle}>flair goes here</Text>
    <View style={styles.dietaryRestrictions}>
      <DietaryRestrictionIcon
        restrictionName="dairy"
        size={30}
        style={{ marginRight: 10 }}
      />
      <DietaryRestrictionIcon
        restrictionName="vegan"
        size={30}
        style={{ marginRight: 10 }}
      />
      <DietaryRestrictionIcon
        restrictionName="shellfish"
        style={{ marginRight: 10 }}
        size={30}
      />
      <TouchableOpacity>
        <Image
          style={{
            width: 30,
            height: 30,
            borderRadius: 30,
          }}
          source={images.add_filled}
        />
      </TouchableOpacity>
    </View>
    <Text style={styles.boldText}>xxx points until next reward!</Text>
    <Button
      title="👤   personal + privacy      >"
      color="black"
      backgroundColor={colors.white}
      onPress={() => {
        navigation.navigate("Details", { from: "Me" })
      }}
      textStyle={{ fontSize: 20 }}
      style={{ display: "flex", flexDirection: "row", marginBottom: 20 }}
    />
    <Button
      title="👜   order history                >"
      color="black"
      backgroundColor={colors.white}
      onPress={() => {
        navigation.navigate("Order History", { from: "Me" })
      }}
      textStyle={{ fontSize: 20 }}
      style={{ display: "flex", flexDirection: "row", marginBottom: 20 }}
    />
    <Button
      title="💳   payment options         >"
      color="black"
      backgroundColor={colors.white}
      onPress={() => {
        navigation.navigate("Details", { from: "Me" })
      }}
      textStyle={{ fontSize: 20 }}
      style={{ display: "flex", flexDirection: "row", marginBottom: 20 }}
    />
    <Button
      title="🔔   notifications                 >"
      color="black"
      backgroundColor={colors.white}
      onPress={() => {
        navigation.navigate("Notifications", { from: "Me" })
      }}
      textStyle={{ fontSize: 20 }}
      style={{ display: "flex", flexDirection: "row", marginBottom: 20 }}
    />
    <Button onPress={logout} title="temp logout lol" />
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
