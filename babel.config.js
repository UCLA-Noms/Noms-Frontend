module.exports = (api) => {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            components: "./src/components",
            pages: "./src/pages",
            theme: "./src/theme",
            utils: "./src/utils",
            slices: "./src/slices",
          },
        },
      ],
      "react-native-reanimated/plugin",
      "@babel/plugin-proposal-export-namespace-from",
      // [
      //   "module:react-native-dotenv",
      // ],
      ["@babel/plugin-proposal-private-methods", { loose: true }],
      "inline-dotenv",
    ],
  }
}
