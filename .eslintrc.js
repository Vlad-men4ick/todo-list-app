// {
//     "env": {
//       "browser": true,
//       "es2021": true
//     },
//     "ignorePatterns": ["node_modules", "dist", "build"],
//     "extends": [
//       "eslint:recommended",
//       "plugin:react/recommended",
//       "plugin:prettier/recommended",
//       "plugin:import/errors",
//       "plugin:import/warnings"
//     ],
//     "parserOptions": {
//       "ecmaFeatures": {
//         "jsx": true
//       },
//       "ecmaVersion": 12,
//       "sourceType": "module"
//     },
//     "plugins": ["react", "prettier", "import"],
//     "rules": {
//       "indent": ["error", 2],
//       "prettier/prettier": "error",
//       "linebreak-style": [0, "unix"],
//       "quotes": ["error", "single"],
//       "semi": ["error", "never"],
//       "react/react-in-jsx-scope": "off",
//       "react/prop-types": 0,
//       "import/no-unresolved": [2, { "caseSensitive": false }],
//       "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
//       "import/order": [
//         2,
//         {
//           "groups": [
//             "builtin",
//             "external",
//             "internal",
//             "parent",
//             "sibling",
//             "index"
//           ],
//           "newlines-between": "always"
//         }
//       ]
//     },
//     "settings": {
//       "import/resolver": {
//         "node": {
//           "extensions": [".js", ".jsx", ".ts", ".tsx"],
//           "moduleDirectory": ["node_modules", "src/"]
//         }
//       }
//     }
//   }

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  ignorePatterns: ['node_modules', 'dist', 'build'],
  extends: ['airbnb', 'airbnb/hooks', 'plugin:react/jsx-runtime', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', 'import', 'react-hooks', 'prettier'],
  rules: {
    'react/state-in-constructor': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/static-property-placement': ["error", "static public field"],
    'react/prop-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    indent: ['error', 2],
    'prettier/prettier': 'error',
    'linebreak-style': [0, 'unix'],
    quotes: ['error', 'single'],
    'import/no-unresolved': [2, { caseSensitive: false }],
    'import/order': [
      'error',
      {
        groups: ['index', 'sibling', 'parent', 'internal', 'external', 'builtin', 'object', 'type'],
      },
    ],
  },
  settings: {
    version: 'detect',
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};