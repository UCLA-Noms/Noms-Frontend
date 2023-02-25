import React, { useState } from "react"
import PropTypes from "prop-types"
import {
  StyleSheet, Text, View, StatusBar, Image, Switch,
} from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { colors, images } from "../theme"
import Button from "../components/Button"
import PFP from "../components/PFP"
import DietaryRestrictionIcon from "../components/DietaryRestrictionIcon"

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
    color: colors.gray,
    marginRight: 20,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 20,
  },
  optionView: {
    display: "flex",
    flexDirection: "row",
    height: 70,
    alignItems: "center",
  },
})

const NotificationsPage = ({ navigation }) => {
  const [allNotifs, setAllNotifs] = useState(false)
  const [rewardNotifs, setRewardNotifs] = useState(false)

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Notifications</Text>
      <View style={styles.optionView}>
        <Text style={styles.subtitle}>allow app to send notifications</Text>
        <Switch
          value={allNotifs}
          onValueChange={() => {
            setAllNotifs(!allNotifs)
          }}
        />
      </View>
      <View style={styles.optionView}>
        <Text style={styles.subtitle}>allow notifications for rewards</Text>
        <Switch
          value={rewardNotifs}
          onValueChange={() => {
            setRewardNotifs(!rewardNotifs)
          }}
        />
      </View>
    </View>
  )
}

NotificationsPage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

NotificationsPage.defaultProps = {
  navigation: { navigate: () => null },
}

export default NotificationsPage
