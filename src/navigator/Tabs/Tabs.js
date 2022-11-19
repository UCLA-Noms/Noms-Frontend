import React from "react"
import { View } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import FontIcon from "react-native-vector-icons/FontAwesome5"
import { colors } from "theme"

// stack navigators
import { DiscoverNavigator, OrderNavigator, MeNavigator } from "../Stacks"

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        switch (route.name) {
          case "Discover":
            return (
              <FontIcon
                name="discover"
                color={focused ? colors.lightPurple : colors.gray}
                size={20}
                solid
              />
            )
          case "Order":
            return (
              <FontIcon
                name="order"
                color={focused ? colors.lightPurple : colors.gray}
                size={20}
                solid
              />
            )
          case "Me":
            return (
              <FontIcon
                name="me"
                color={focused ? colors.lightPurple : colors.gray}
                size={20}
                solid
              />
            )
          default:
            return <View />
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.lightPurple,
      inactiveTintColor: colors.gray,
      style: {
        // backgroundColor: 'white',
        // borderTopColor: 'gray',
        // borderTopWidth: 1,
        // paddingBottom: 5,
        // paddingTop: 5,
      },
    }}
    initialRouteName="Home"
    swipeEnabled={false}
  >
    <Tab.Screen name="Discover" component={DiscoverNavigator} />
    <Tab.Screen name="Order" component={OrderNavigator} />
    <Tab.Screen name="Me" component={MeNavigator} />
  </Tab.Navigator>
)

export default TabNavigator
