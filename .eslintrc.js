module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended",
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
      // "jsx-a11y",
      "react"
    ],
    "rules": {
      "react/prop-types": 0
    },

}
