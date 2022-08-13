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
    'react/react-in-jsx-scope': 0, // import React 생략
    'no-shadow': 0, // Enum 버그로 인해 해당 기능 비활성화
    'no-restricted-exports': ['error', { restrictedNamedExports: ['default'] }], // export { default } 를 사용하기 위해 허용
    'import/prefer-default-export': 0, // 하나만 있더라도 named export 가능하게
    'react/require-default-props': [
      'error',
      {
        functions: 'defaultArguments', // 타입스크립트는 type 으로 옵셔널을 지정해줄 수 있기 때문에..
      },
    ],
  },
};
