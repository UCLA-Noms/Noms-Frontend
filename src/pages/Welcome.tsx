import React from "react"
import PropTypes from "prop-types"
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native"
import { colors, images } from "../theme"
import Button from "../components/Button"

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightGrayPurple,
  },
  bigtitle: {
    fontSize: 35,
    marginBottom: 20,
    fontWeight: "bold",
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 15,
  },
  smalltext: {
    fontSize: 20,
  },
  grid: {
    flex: 3, // the number of columns you want to devide the screen into
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
})

const Welcome = ({ route, navigation }) => {
  const { username, email } = route.params
  return (
    <ImageBackground source={images.ellipse} style={styles.root}>
      <View style={{ height: "10%", width: "86%" }}>
        <Text
          style={[
            styles.bigtitle,
            { flexDirection: "row", alignItems: "flex-start" },
          ]}
        >
          Hi, <Text style={{ color: colors.lightBlue }}>{username}</Text>
        </Text>
      </View>
      <Text
        style={[
          styles.title,
          { flexDirection: "row", alignItems: "flex-start", width: "86%" },
        ]}
      >
        Welcome to <Text style={{ fontWeight: "bold" }}>NOMS.</Text>
      </Text>
      <View style={{ height: "10%", width: "86%" }}>
        <Text style={styles.subtitle}>
          Let&apos;s set up a few things before you get NOMming! To get started,
          first...
        </Text>
      </View>
      <Image
        source={images.welcome}
        style={{
          width: "50%",
          height: undefined,
          aspectRatio: 1,
          marginBottom: 50,
        }}
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
            navigation.navigate("PFPSelector", {
              username,
              email,
            }) // temporarily pass profile image by props
          }}
        />
      </View>
    </ImageBackground>
  )
}

export default Welcome
