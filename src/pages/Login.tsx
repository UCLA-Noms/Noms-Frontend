import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Image, StyleSheet, View } from "react-native"
import * as WebBrowser from "expo-web-browser"
import { useSelector, useDispatch } from "react-redux"

import * as Google from "expo-auth-session/providers/google"

import { revokeAsync } from "expo-auth-session"
// eslint-disable-next-line import/no-unresolved
import { REACT_APP_EXPOCLIENTID } from "@env"
import * as SecureStore from "expo-secure-store"
import { colors, images } from "../theme"
import { authenticate } from "../slices/app.slice"
import Button from "../components/Button"

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

  // eslint-disable-next-line no-unused-vars
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: REACT_APP_EXPOCLIENTID,
  })

  const [accessToken, setAccessToken] = useState()
  const [userInfo, setUserInfo] = useState()

  async function login() {
    promptAsync()
  }

  async function logout() {
    await revokeAsync({ token: accessToken }, Google.discovery)
    setAccessToken(null)
    await SecureStore.deleteItemAsync("accessToken")
    setUserInfo(null)
  }

  async function getUserInfo() {
    const info = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
    info.json().then((userData) => {
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
      setAccessToken(response.authentication.accessToken)
      const storeToken = async () => {
        await SecureStore.setItemAsync("accessToken", String(accessToken))
      }
      storeToken()
    }
  }, [response])

  useEffect(() => {
    if (accessToken) {
      getUserInfo(accessToken)
    }
  }, [accessToken])

  useEffect(() => {
    if (userInfo) {
      navigation.navigate("PFPSelector", { username: userInfo.name }) // temporarily pass username as prop
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
        onPress={
          !accessToken
            ? () => {
                login({ useProxy: true })
              }
            : logout
        }
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
