{
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:react-hooks/recommended",
    "plugin:promise/recommended",
    "plugin:json/recommended",
    "plugin:promise/recommended",
    "prettier"
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint", "promise", "prettier", "json"],
  "rules": {
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "no-multi-spaces": ["error"],
    "eqeqeq": ["warn", "always"],
    "no-unused-vars": ["error"],
    "no-duplicate-case": ["error"],
    "no-extra-semi": ["error"],
    "no-unreachable": ["error"],
    "default-case": ["warn"],
    "default-case-last": ["error"],
    "no-useless-catch": ["warn"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": [
      "warn",
      {
        "endOfLine": "auto"
      }
    ]
  },
  "overrides": [
    {
      "files": ["**/*.tsx", "**/*.ts"],
      "rules": {
        "no-unused-vars": "off",
        "react/prop-types": "off",
        "react/display-name": "off"
      }
    },
    {
      "files": ["./server/**/*.ts"],
      "rules": {
        "react-hooks/rules-of-hooks": "off",
        "react-hooks/exhaustive-deps": "off",
        "react/react-in-jsx-scope": "off"
      }
    }
  ],
  "settings": {
    "react": {
      "createClass": "createReactClass",
      "pragma": "React",
      "fragment": "Fragment",
      "version": "detect"
    }
  }
}
