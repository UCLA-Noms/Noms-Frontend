import { Asset } from "expo-asset"

const images = {
  logo_sm: require("../../assets/images/logo-sm.png"),
  logo_lg: require("../../assets/images/logo-lg.png"),
  home: require("../../assets/images/home.png"),
  order: require("../../assets/images/order.png"),
  fun: require("../../assets/images/fun.png"),
  me: require("../../assets/images/me.png"),
}

// image preloading
export const imageAssets = Object.keys(images).map((key) => Asset.fromModule(images[key]).downloadAsync())

export default images
