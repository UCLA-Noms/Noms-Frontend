import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { colors } from "theme"
import Discover from "pages/Discover"
import Details from "pages/Details"
import Order from "pages/Order"
import Me from "pages/Me"
import HeaderLeft from "./HeaderLeft"
import HeaderTitle from "./HeaderTitle"

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

const navigationProps = {
  headerTintColor: "white",
  headerStyle: { backgroundColor: colors.darkPurple },
  headerTitleStyle: { fontSize: 18 },
}

// ------------------------------------
// Navigators
// ------------------------------------

export const DiscoverNavigator = () => (
  <Stack.Navigator
    initialRouteName="Discover"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Discover"
      component={Discover}
      options={({ navigation }) => ({
        title: "Discover",
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={{
        title: "Details",
      }}
    />
  </Stack.Navigator>
)

export const OrderNavigator = () => (
  <Stack.Navigator
    initialRouteName="Order"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Order"
      component={Order}
      options={({ navigation }) => ({
        title: "Order",
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={{
        title: "Details",
      }}
    />
  </Stack.Navigator>
)

export const MeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Me"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Me"
      component={Me}
      options={({ navigation }) => ({
        title: "Me",
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="Details"
      component={Details}
      options={{
        title: "Details",
      }}
    />
  </Stack.Navigator>
)
