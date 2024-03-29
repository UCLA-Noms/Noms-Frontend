// eslint-disable-next-line import/no-extraneous-dependencies
import { getDefaultConfig } from "@expo/metro-config"

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig(__dirname)
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: {
      assetExts: [...assetExts.filter(ext => ext !== "svg"), "cjs"],
      sourceExts: [...sourceExts, "svg"],
    },
  }
})()
