import React from "react"
import PropTypes from "prop-types"
import { StyleSheet, View, Text, Button, TextInput } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"
import { colors } from "../theme"
import PFP from "../components/PFP"

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightGrayPurple,
  },
  bigtitle: {
    fontSize: 40,
    marginBottom: 20,
    fontWeight: "bold",
  },
  title: {
    fontSize: 35,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
  },
  smalltext: {
    fontSize: 20,
  },
  grid: {
    flex: 3, // the number of columns you want to divide the screen into
    marginHorizontal: "auto",
    width: 400,
    backgroundColor: "red",
  },
  row: {
    flexDirection: "row",
    margin: 10,
  },
  container: {
    flex: 1,
    backgroundColor: colors.lightGrayPurple,
    alignItems: "center",
    justifyContent: "center",
  },
  profilecircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    overflow: "hidden",
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
  },
})

const HorizontalLine = () => (
  <View
    style={{
      width: "100%",
      height: 10,
      borderColor: colors.lightGrayPurple,
      borderBottomWidth: 1,
    }}
  />
)

const CreateAccount = ({ route, navigation }) => {
  const { pfp } = route.params
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{ flex: 1 }}
      scrollEnabled={false}
      // style={styles.root}
    >
      <View style={styles.root}>
        <PFP
          image={pfp}
          selected
          select={() => {
            navigation.navigate("Home")
          }}
        />
        {/* <View style={{ height: "20%", width: "86%" }}> */}
        <Text
          style={[
            styles.bigtitle,
            { flexDirection: "row", alignItems: "flex-start" },
          ]}
        >
          Jason Tay
        </Text>
        <View style={{ height: "10%" }}>
          <Text style={styles.subtitle}>email@g.ucla.edu</Text>
        </View>
        <HorizontalLine />
        <Text
          style={[
            styles.smalltext,
            {
              width: "86%",
              flexDirection: "row",
              alignItems: "flex-start",
            },
          ]}
        >
          Looking good! Next...
        </Text>
        <HorizontalLine />
        <Text
          style={[
            styles.smalltext,
            {
              width: "86%",
              flexDirection: "row",
              alignItems: "flex-start",
              fontWeight: "bold",
              fontSize: 16,
            },
          ]}
        >
          Add and verify your phone number
        </Text>
        <TextInput
          style={{
            color: "black",
            width: "70%",
            height: "5%",
            textAlignVertical: "top",
            marginTop: "5%",
            padding: "6%",
            borderColor: colors.lightBlue,
            borderWidth: 2,
            borderRadius: 5,
          }}
          // value={caption}
          // onChangeText={(text) => setCaption(text)}
          placeholder="E.g. 9497382002"
          placeholderTextColor="black"
        />
        <View
          style={{
            flexDirection: "column",
            height: "5%",
            width: "80%",
            alignItems: "flex-end",
          }}
        >
          <Button
            title="Next"
            color={colors.lightBlue}
            width={100}
            height={50}
            backgroundColor={colors.lightGrayPurple}
            borderColor={colors.lightBlue}
            borderWidth={1}
            borderRadius={20}
            onPress={() => {
              navigation.navigate("Home") // temporarily pass profile image by props
            }}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}

CreateAccount.propTypes = {
  pfp: PropTypes.string,
}

CreateAccount.defaultProps = {
  pfp: "",
}

export default CreateAccount
