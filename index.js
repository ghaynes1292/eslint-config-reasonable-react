module.exports = {
  parser: 'babel-eslint',
  extends: [
    'standard',
    'standard-jsx',
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: [
    'promise',
    'react',
    'standard'
  ],
  globals: {
    'it': false,
    'expect': false,
    'describe': false,
    'localStorage': false,
    'sessionStorage': false,
  },
  "rules": {
    "react/jsx-no-bind": ["error", {
      "allowArrowFunctions": true,
      "allowBind": false,
      "ignoreRefs": true
    }],
    "react/no-did-update-set-state": "error",
    "react/no-unknown-property": "error",
    "react/no-unused-prop-types": "error",
    "react/prop-types": "error",
    "react/react-in-jsx-scope": "error"
  }
}
