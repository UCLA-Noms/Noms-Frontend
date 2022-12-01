module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parser: "babel-eslint",
  extends: ["plugin:react/recommended", "airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    semi: [2, "never"],
    quotes: [2, "double"],
    "react/jsx-filename-extension": "off",
    "react/jsx-one-expression-per-line": "off",
    "max-len": "off",
    "react/prop-types": [1],
    "global-require": "off",
    "no-console": "off",
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: true,
      },
    ],
    "template-curly-spacing": "off",
    indent: [
      "error",
      2,
      {
        ignoredNodes: ["TemplateLiteral"],
      },
    ],
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
}
