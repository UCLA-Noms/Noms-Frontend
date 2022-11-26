import React from "react"
import PropTypes from "prop-types"
import {
  Text, View, StatusBar, Image, SafeAreaView,
} from "react-native"
import Button from "components/Button"
import { ScrollView } from "react-native-gesture-handler"
import EStyleSheet from "react-native-extended-stylesheet"
import { vw } from "react-native-expo-viewport-units"
import DietToggle from "../../components/Diet Toggle"

const styles = EStyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
    marginTop: "1rem",
  },
  text: {
    fontSize: "1rem",
    marginBottom: "1rem",
    width: "100%",
    paddingLeft: vw(6.25),
    paddingRight: vw(6.25),
    boxSixing: "border-box",
    marginTop: "1rem",
  },
  restrictionGrid: {
    // display: "grid",
    // gridTemplateColumns: "1fr 1fr 1fr",
    // width: "100%",
    // paddingLeft: vw(6.25),
    // paddingRight: vw(6.25),
    // boxSixing: "border-box",
    // justifyContent: "space-between",
    // gridGap: vw(6.25),
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    padding: vw(6.25),
  },
  image: {
    width: vw(30),
    height: vw(30),
  },
})

const DietaryRestrictions = () => (
  <SafeAreaView style={{ backgroundColor: "white" }}>
    <ScrollView>
      <View style={styles.root}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Almost Done!</Text>
        {/* placeholder for component for profile picture */}
        <Image
          style={styles.image}
          source={{
            uri: "http://www.clker.com/cliparts/t/O/b/8/F/F/lime-slice-md.png",
          }}
        />
        <Text style={styles.text}>
          Add your dietary restrictions or preferences for a better NOMS
          experience!
        </Text>

        <View style={styles.buttonContainer}>
          <View style={{ flex: 1 }} />
          <Button title="Skip" />
        </View>

        <View style={styles.restrictionGrid}>
          <DietToggle title="Vegetarian" value={false} />
          <DietToggle title="Vegan" value={false} />
          <DietToggle title="Halal" value={false} />
          <DietToggle title="Dairy" value={false} />
          <DietToggle title="Shellfish" value={false} />
          <DietToggle title="Wheat" value={false} />
          <DietToggle title="Vegetarian" value={false} />
          <DietToggle title="Vegan" value={false} />
          <DietToggle title="Halal" value={false} />
          <DietToggle title="Dairy" value={false} />
          <DietToggle title="Shellfish" value={false} />
          <DietToggle title="Wheat" value={false} />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Back" />
          <View style={{ flex: 1 }} />
          <Button title="Finish" />
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
)

DietaryRestrictions.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

DietaryRestrictions.defaultProps = {
  navigation: { navigate: () => null },
}

export default DietaryRestrictions
