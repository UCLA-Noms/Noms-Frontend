import { Asset } from "expo-asset"

const images = {
  logo_sm: require("../../assets/images/logo-sm.png"),
  logo_lg: require("../../assets/images/logo-lg.png"),
  logo_login: require("../../assets/images/logo-login.png"),
  home: require("../../assets/images/home.png"),
  order: require("../../assets/images/order.png"),
  fun: require("../../assets/images/fun.png"),
  me: require("../../assets/images/me.png"),
  pfp1: require("../../assets/images/pfp/pfp1.png"),
  pfp2: require("../../assets/images/pfp/pfp2.png"),
  pfp3: require("../../assets/images/pfp/pfp3.png"),
  pfp4: require("../../assets/images/pfp/pfp4.png"),
  pfp5: require("../../assets/images/pfp/pfp5.png"),
  pfp6: require("../../assets/images/pfp/pfp6.png"),
  bag: require("../../assets/images/bag.png"),
  timer1: require("../../assets/images/timer1.png"),
  clock: require("../../assets/images/clock.png"),
  rListing1: require("../../assets/images/rListing1.png"),
  rListing2: require("../../assets/images/rListing2.png"),
  rListing3: require("../../assets/images/rListing3.png"),
  rListing4: require("../../assets/images/rListing4.png"),
  bruh: require("../../assets/images/bruh.png"),
  slider: require("../../assets/images/Slider.png"),
}

// image preloading
export const imageAssets = Object.keys(images).map(key => Asset.fromModule(images[key]).downloadAsync())

export default images
