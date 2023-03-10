module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  parser: "babel-eslint",
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
  ],
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
    "no-shadow": "off",
    "import/named": "off",
    "@typescript-eslint/no-shadow": [0, "error"],
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
        js: "never",
      },
    ],
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
      typescript: {},
      node: {
        paths: ["src"],
      },
    },
  },
}
