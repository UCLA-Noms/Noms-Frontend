import React, { useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { Text } from "react-native"
import DrawerNavigator from "./Drawer"
import { authenticate } from "../slices/app.slice"

const Navigator = () => {
  const { checked, loggedIn } = useSelector(state => state.app)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authenticate({ loggedIn: true, checked: true }))
  }, [])
  console.log("[##] loggedIn", loggedIn)

  return checked ? (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  ) : (
    <Text> Loading </Text>
  )
}

export default Navigator
