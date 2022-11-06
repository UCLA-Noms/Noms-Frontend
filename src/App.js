import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import store from 'utils/store'
import 'utils/ignore'

// assets
import { imageAssets } from 'theme/images'
import { fontAssets } from 'theme/fonts'
import { Amplify } from 'aws-amplify'
import Navigator from './navigator'

import awsconfig from './aws-exports'

Amplify.configure(awsconfig)

const App = () => {
  const [didLoad, setDidLoad] = useState(false)
  // assets preloading
  const handleLoadAssets = async () => {
    await Promise.all([...imageAssets, ...fontAssets])
    setDidLoad(true)
  }

  useEffect(() => {
    handleLoadAssets()
  }, [])

  return didLoad ? (
    <Provider store={store}>
      <Navigator />
    </Provider>
  ) : (
    <View />
  )
}

export default App
