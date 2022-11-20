import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, StatusBar, Image } from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'
import { AuthContext } from '../../navigator/Navigator'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})

function Profile({ navigation }) {
  const auth = React.useContext(AuthContext)
  const login = () => {
    auth.login()
  }
  const logout = () => {
    auth.logout()
  }
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Profile</Text>
      {auth.userInfo ? (
        <Image
          source={{ uri: auth.userInfo.picture }}
          style={{ width: 50, height: 50 }}
        />
      ) : null}
      <Text style={styles.title}>
        {auth.userInfo ? `Logged in as ${auth.userInfo.name}` : 'Logged out'}
      </Text>
      <Button
        title="Go to Details"
        color="white"
        backgroundColor={colors.lightPurple}
        onPress={() => {
          navigation.navigate('Details', { from: 'Profile' })
        }}
      />
      <Button
        title={!auth.loggedIn ? 'Login' : 'Logout'}
        color="white"
        backgroundColor={colors.lightPurple}
        onPress={
          !auth.loggedIn
            ? () => {
                login({ useProxy: true })
              }
            : logout
        }
      />
    </View>
  )
}

Profile.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

Profile.defaultProps = {
  navigation: { navigate: () => null },
}

export default Profile
