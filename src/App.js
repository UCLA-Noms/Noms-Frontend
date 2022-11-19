import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import store from 'utils/store'
import 'utils/ignore'
import * as SecureStore from 'expo-secure-store'

// assets
import { imageAssets } from 'theme/images'
import { fontAssets } from 'theme/fonts'
import Navigator from './navigator'

// authentication
import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser'
import { revokeAsync } from 'expo-auth-session'

WebBrowser.maybeCompleteAuthSession()

const App = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      '719487926179-4je0gnunivq2g90dnvoic3m69619bftt.apps.googleusercontent.com',
  })

  const [accessToken, setAccessToken] = useState()
  const [userInfo, setUserInfo] = useState()
  const [didLoad, setDidLoad] = useState(false)
  // assets preloading
  const handleLoadAssets = async () => {
    await Promise.all([...imageAssets, ...fontAssets])
    setDidLoad(true)
  }

  useEffect(() => {
    handleLoadAssets()
  }, [])

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

  return didLoad ? (
    <AuthContext.Provider
      value={{
        login: promptAsync,
        logout: logout,
        userInfo: userInfo,
        loggedIn: accessToken ? true : false,
      }}
    >
      <Provider store={store}>
        <Navigator />
      </Provider>
    </AuthContext.Provider>
  ) : (
    <View />
  )
}

export const AuthContext = React.createContext()
export default App
