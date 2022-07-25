module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.ts', '.tsx'] }], // 확장자로 ts tsx 허용하도록 수정
    'import/extensions': 0, // import 경로 에러 해제
    'import/no-unresolved': 0, // import 경로 에러 해제
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'react/react-in-jsx-scope': 0,
    'react/button-has-type': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
