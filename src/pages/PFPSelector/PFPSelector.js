import React from "react"
import PropTypes from "prop-types"
import { StyleSheet, Text, View } from "react-native"
import { colors } from "theme"
import PFP from "../../components/PFP"
import Button from "../../components/Button"

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
      marginBottom: 30,
      borderColor: "#000000",
      borderWidth: 0.2,
    }}
  />
)

const PFPSelector = ({ route, navigation }) => {
  const [selected, setSelected] = React.useState(null)
  const { username } = route.params
  return (
    <View style={styles.root}>
      <View style={{ height: "20%", width: "86%" }}>
        <Text
          style={[
            styles.bigtitle,
            { flexDirection: "row", alignItems: "flex-start" },
          ]}
        >
          Hi, <Text style={{ color: colors.lightBlue }}>{username}</Text>
        </Text>
        <Text
          style={[
            styles.title,
            { flexDirection: "row", alignItems: "flex-start" },
          ]}
        >
          Welcome to <Text style={{ fontWeight: "bold" }}>NOMS.</Text>
        </Text>
      </View>
      <HorizontalLine />
      <View style={{ height: "10%" }}>
        <Text style={styles.subtitle}>
          Let&apos;s set up a few things before you get NOMming! To get started,
          first...
        </Text>
      </View>
      <HorizontalLine />
      <Text
        style={[
          styles.smalltext,
          {
            width: "86%",
            flexDirection: "row",
            fontWeight: "bold",
            fontStyle: "italic",
            alignItems: "flex-start",
          },
        ]}
      >
        Choose a profile picture:
      </Text>
      <View style={{ height: "35%" }}>
        <View style={styles.container}>
          <View style={styles.row}>
            <PFP
              image={0}
              selected={selected === 0}
              select={() => setSelected(0)}
            />
            <PFP
              image={1}
              selected={selected === 1}
              select={() => setSelected(1)}
            />
            <PFP
              image={2}
              selected={selected === 2}
              select={() => setSelected(2)}
            />
          </View>
          <View style={styles.row}>
            <PFP
              image={3}
              selected={selected === 3}
              select={() => setSelected(3)}
            />
            <PFP
              image={4}
              selected={selected === 4}
              select={() => setSelected(4)}
            />
            <PFP
              image={5}
              selected={selected === 5}
              select={() => setSelected(5)}
            />
          </View>
        </View>
      </View>
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
            navigation.navigate("CreateAccount", { pfp: selected }) // temporarily pass profile image by props
          }}
        />
      </View>
    </View>
  )
}

PFPSelector.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
  route: PropTypes.shape({
    params: PropTypes.shape({
      username: PropTypes.string,
    }),
  }),
}

PFPSelector.defaultProps = {
  navigation: { navigate: () => null },
  route: { params: { username: null } },
}

export default PFPSelector
