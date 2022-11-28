// Fix from here: https://github.com/expo/expo/issues/18485

import "expo/build/Expo.fx"
import { Platform } from "react-native"
import { registerRootComponent } from "expo"
import { activateKeepAwake } from "expo-keep-awake"
import { createRoot } from "react-dom/client"
import App from "./App.tsx" /* CHANGE THE PATH BASED ON WHERE YOURS IS LOCATED */

if (process.env.NODE_ENV === "development") {
  activateKeepAwake()
}

if (Platform.OS === "web") {
  const root = createRoot(
    document.getElementById("root") ?? document.getElementById("main"),
  )
  root.render(<App />)
} else {
  registerRootComponent(App)
}
