import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Image, StyleSheet, View } from "react-native"
import * as WebBrowser from "expo-web-browser"
import { useSelector, useDispatch } from "react-redux"

import * as Google from "expo-auth-session/providers/google"

import { revokeAsync } from "expo-auth-session"
import * as SecureStore from "expo-secure-store"
import { colors, images } from "../theme"
import { authenticate } from "../slices/app.slice"
import Button from "../components/Button"

import { login, logout } from "../backend/authfunctions"

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 280,
    height: 70,
    margin: 50,
  },
})

WebBrowser.maybeCompleteAuthSession()

const Login = ({ navigation }) => {
  const { loggedIn } = useSelector((state) => state.app)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authenticate({ loggedIn: true, checked: true }))
  }, [])

  // TODO: switch router by loggedIn state
  console.log("[##] loggedIn", loggedIn)

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: process.env.REACT_APP_WEBCLIENTID,
    expoClientId: process.env.REACT_APP_EXPOCLIENTID,
    responseType: "token",
  })

  const [accessToken, setAccessToken] = useState("")
  const [idToken, setIDToken] = useState("")
  const [userInfo, setUserInfo] = useState(null)

  async function signin() {
    promptAsync()
  }

  async function signout() {
    await revokeAsync({ token: accessToken }, Google.discovery)
    setAccessToken(null)
    setIDToken(null)
    await SecureStore.deleteItemAsync("accessToken")
    setUserInfo(null)
    logout()
  }

  async function getUserInfo() {
    const info = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    info.json().then((userData) => {
      console.log("got user data")
      setUserInfo(userData)
    })
  }

  // useEffect(() => {
  //   setLoggedIn(!!accessToken)
  // }, [accessToken])

  // function getProfilePic() {
  //   if (userInfo) {
  //     console.log(userInfo.picture)
  //     return <Image source={{ uri: userInfo.picture }} style={{ width: 50, height: 50 }} />;
  //   }
  // }

  useEffect(() => {
    console.log("test")
    if (response?.type === "success") {
      console.log("success")
      console.log(response)
      setAccessToken(response.authentication.accessToken)
      setIDToken(response.authentication.idToken)
      const storeToken = async () => {
        await SecureStore.setItemAsync("accessToken", String(accessToken))
      }
      storeToken()
    }
  }, [response])

  useEffect(() => {
    if (accessToken) {
      console.log("got access token")
      // console.log(accessToken);
      getUserInfo().then(() => login(null, accessToken))
    }
  }, [idToken, accessToken])

  useEffect(() => {
    if (userInfo) {
      navigation.navigate("Welcome", {
        username: userInfo.name,
        email: userInfo.email,
      }) // temporarily pass username as prop
    }
  }, [userInfo])

  return (
    <View style={styles.root}>
      <Image style={styles.image} source={images.logo_login} />
      {/* {userInfo ? (
        <Image
          source={{ uri: userInfo.picture }}
          style={{ width: 50, height: 50 }}
        />
      ) : null} */}
      {/* <Text style={styles.title}>
        {userInfo ? `Logged in as ${userInfo.name}` : "Logged out"}
      </Text> */}
      <Button
        title={!accessToken ? "Log in" : "Logout"}
        color="black"
        width={200}
        height={50}
        backgroundColor={colors.lightGrayPurple}
        borderColor="black"
        borderWidth={1}
        borderRadius={20}
        onPress={!accessToken ? signin : signout}
      />
    </View>
  )
}

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Login.defaultProps = {
  navigation: { navigate: () => null },
}
export const AuthContext = React.createContext()
export default Login
