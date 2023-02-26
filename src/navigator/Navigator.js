import React, { useEffect } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { Text } from "react-native"
import { authenticate } from "../slices/app.slice"
import TabNavigator from "./Tabs"
import { useAuthentication } from "../backend/useAuth"
import { ProfileSetupNavigator } from "./Stacks"

const Navigator = () => {
  const { checked, loggedIn } = useSelector(state => state.app)
  const dispatch = useDispatch()
  const { user } = useAuthentication()

  useEffect(() => {
    dispatch(authenticate({ loggedIn: false, checked: true }))
  }, [])
  console.log("[##] loggedIn", loggedIn)

  return checked ? (
    <NavigationContainer>
      {user ? <TabNavigator loggedIn /> : <ProfileSetupNavigator />}
    </NavigationContainer>
  ) : (
    <Text> Loading </Text>
  )
}

export default Navigator
