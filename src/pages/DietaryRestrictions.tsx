import React from "react"
import PropTypes from "prop-types"
import {
  Text,
  View,
  StatusBar,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import EStyleSheet from "react-native-extended-stylesheet"
import { vw } from "react-native-expo-viewport-units"
import DietToggle from "../components/Diet Toggle"

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
    fontSize: 20,
    marginBottom: 10,
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
        <View style={{ marginTop: 20 }} />
        {/* placeholder for component for profile picture */}
        <Image
          style={styles.image}
          source={{
            uri: "http://www.clker.com/cliparts/t/O/b/8/F/F/lime-slice-md.png",
          }}
        />
        <Text style={{ ...styles.text, textAlign: "center" }}>
          camiemail@g.ucla.edu{" "}
        </Text>
        <Text style={{ ...styles.text, marginBottom: 0 }}>
          Almost done! Add your dietary restrictions and/or allergies for a
          better NOMS experience!
        </Text>
        <Text
          style={{
            ...styles.text,
            marginBottom: 0,
            fontWeight: "bold",
            fontSize: 15,
            fontStyle: "italic",
          }}
        >
          You can always change these later!
        </Text>

        <View style={styles.buttonContainer}>
          <View style={{ flex: 1 }} />
          <TouchableOpacity
            style={{
              width: "100%",
              borderRadius: 40,
              height: 40,
              backgroundColor: "#F5F5F5",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ textAlign: "center", color: "black", fontSize: 20 }}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.restrictionGrid}>
          <Text style={styles.text}>Select any dietary restrictions:</Text>
          <DietToggle title="Vegan" restrictionName="vegan" value={false} />
          <DietToggle
            title="Vegetarian"
            restrictionName="vegetarian"
            value={false}
          />
          <DietToggle
            title="Gluten Free"
            restrictionName="glutenFree"
            value={false}
          />
          <DietToggle title="Halal" restrictionName="halal" value={false} />
          <Text style={styles.text}>Select any allergies:</Text>
          <DietToggle
            title="Shellfish"
            restrictionName="shellfish"
            value={false}
          />
          <DietToggle title="Dairy" restrictionName="dairy" value={false} />
          <DietToggle title="Fish" restrictionName="fish" value={false} />
          <DietToggle title="Eggs" restrictionName="eggs" value={false} />
          <DietToggle title="Nuts" restrictionName="nuts" value={false} />
          <DietToggle title="Grain" restrictionName="grain" value={false} />
          <DietToggle
            title="Tree Nuts"
            restrictionName="treeNuts"
            value={false}
          />
          <DietToggle title="Soy" restrictionName="soy" value={false} />
        </View>

        <View style={styles.buttonContainer}>
          {/* <Button title="Back" />
          <View style={{ flex: 1 }} /> */}
          <TouchableOpacity
            style={{
              width: "100%",
              borderRadius: 40,
              height: 40,
              backgroundColor: "#38B6FF",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ textAlign: "center", color: "white", fontSize: 20 }}>
              Finish
            </Text>
          </TouchableOpacity>
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
