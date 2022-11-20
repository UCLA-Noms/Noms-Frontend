import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { authenticate } from 'slices/app.slice'

import DrawerNavigator from './Drawer'

import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser'
import { revokeAsync } from 'expo-auth-session'
import { REACT_APP_EXPOCLIENTID } from '@env'

WebBrowser.maybeCompleteAuthSession()

const Navigator = () => {
  const { checked, loggedIn } = useSelector((state) => state.app)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authenticate({ loggedIn: true, checked: true }))
  }, [])

  // TODO: switch router by loggedIn state
  console.log('[##] loggedIn', loggedIn)

  //authentication
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: REACT_APP_EXPOCLIENTID,
  })

  const [accessToken, setAccessToken] = useState()
  const [userInfo, setUserInfo] = useState()

  // authentication

  async function logout() {
    await revokeAsync({ token: accessToken }, Google.discovery)
    setAccessToken(null)
    await SecureStore.deleteItemAsync('accessToken')
    setUserInfo(null)
  }

  async function getUserInfo() {
    let info = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    info.json().then((info) => {
      setUserInfo(info)
    })
  }

  // function getProfilePic() {
  //   if (userInfo) {
  //     console.log(userInfo.picture)
  //     return <Image source={{ uri: userInfo.picture }} style={{ width: 50, height: 50 }} />;
  //   }
  // }

  React.useEffect(() => {
    console.log('test')
    if (response?.type === 'success') {
      setAccessToken(response.authentication.accessToken)
      const storeToken = async () => {
        await SecureStore.setItemAsync('accessToken', String(accessToken))
      }
      storeToken()
    }
  }, [response])

  React.useEffect(() => {
    if (accessToken) {
      getUserInfo(accessToken)
    }
  }, [accessToken])

  return checked ? (
    <AuthContext.Provider
      value={{
        login: promptAsync,
        logout: logout,
        userInfo: userInfo,
        loggedIn: accessToken ? true : false,
      }}
    >
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </AuthContext.Provider>
  ) : (
    <Text>Loading...</Text>
  )
}

export const AuthContext = React.createContext()
export default Navigator
