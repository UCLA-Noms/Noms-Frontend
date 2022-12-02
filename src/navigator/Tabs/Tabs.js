import React from "react"
import { Image, View } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { colors, images } from "theme"

// stack navigators
import {
  HomeNavigator,
  OrderNavigator,
  MeNavigator,
  ProfileSetupNavigator,
} from "../Stacks"
import { FunNavigator, RestuarantNavigator } from "../Stacks/Stacks"

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        switch (route.name) {
        case "Home":
          return (
            <Image
              source={images.home}
              color={focused ? colors.lightPurple : colors.gray}
            />
          )
        case "Order":
          return (
            <Image
              source={images.order}
              color={focused ? colors.lightPurple : colors.gray}
            />
          )
        case "Me":
          return (
            <Image
              source={images.fun}
              color={focused ? colors.lightPurple : colors.gray}
            />
          )
        case "Fun":
          return (
            <Image
              source={images.me}
              color={focused ? colors.lightPurple : colors.gray}
            />
          )
        default:
          return <View />
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.lightBlue,
      inactiveTintColor: colors.gray,
      style: {
        // backgroundColor: 'white',
        // borderTopColor: 'gray',
        // borderTopWidth: 1,
        // paddingBottom: 5,
        // paddingTop: 5,
      },
    }}
    initialRouteName="ProfileSetup"
    swipeEnabled={false}
  >
    <Tab.Screen
      name="ProfileSetup"
      options={{
        tabBarButton: () => null,
        tabBarVisible: false,
      }}
      component={ProfileSetupNavigator}
    />
    <Tab.Screen name="Home" component={HomeNavigator} />
    <Tab.Screen name="Order" component={OrderNavigator} />
    <Tab.Screen name="Fun" component={FunNavigator} />
    <Tab.Screen name="Me" component={MeNavigator} />
    <Tab.Screen
      name="Restuarant"
      options={{
        tabBarButton: () => null,
        tabBarVisible: false,
      }}
      component={RestuarantNavigator}
    />
  </Tab.Navigator>
)

export default TabNavigator
