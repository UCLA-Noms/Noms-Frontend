import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { colors } from "theme"
import Details from "pages/Details"
import Order from "pages/Order"
import Me from "pages/Me"
import HeaderLeft from "./HeaderLeft"
import HeaderTitle from "./HeaderTitle"
import Logo from "../../pages/Logo"
import Login from "../../pages/Login"
import PFPSelector from "../../pages/PFPSelector"
import Fun from "../../pages/Fun"
import Checkout from "../../pages/Checkout"
import DietaryRestrictions from "../../pages/Dietary Restrictions"
import Home from "../../pages/Home"
import CreateAccount from "../../pages/CreateAccount"

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

const navigationProps = {
  headerTintColor: "white",
  headerStyle: { backgroundColor: colors.darkPurple },
  headerTitleStyle: { fontSize: 18 },
  headerShown: false, // TODO: Remove header
}

// ------------------------------------
// Navigators
// ------------------------------------

export const ProfileSetupNavigator = () => (
  <Stack.Navigator initialRouteName="Logo">
    <Stack.Screen
      name="Logo"
      component={Logo}
      options={() => ({
        title: "Logo",
        headerShown: false,
      })}
    />
    <Stack.Screen
      name="Login"
      component={Login}
      options={() => ({
        title: "Login",
        headerShown: false,
      })}
    />
    <Stack.Screen
      name="PFPSelector"
      component={PFPSelector}
      options={() => ({
        title: "PFPSelector",
        headerShown: false,
      })}
    />
    <Stack.Screen
      name="DietaryRestriction"
      component={DietaryRestrictions}
      options={() => ({
        title: "Dietary Restriction",
        headerShown: false,
      })}
    />
    <Stack.Screen
      name="CreateAccount"
      component={CreateAccount}
      options={() => ({
        title: "Create Account",
        headerShown: false,
      })}
    />
  </Stack.Navigator>
)

export const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={({ navigation }) => ({
        title: "Home",
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
      name="Checkout"
      component={Checkout}
      options={{
        title: "Checkout",
      }}
    />
  </Stack.Navigator>
)

export const FunNavigator = () => (
  <Stack.Navigator
    initialRouteName="Fun"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Fun"
      component={Fun}
      options={({ navigation }) => ({
        title: "Fun",
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
