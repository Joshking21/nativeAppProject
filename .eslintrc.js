module.exports = {
  extends: ['expo'],
  rules: {
    // This is the "Joshua Rule" — marks unused variables as red errors
    'no-unused-vars': 'error',
    // This prevents you from using variables before they are defined
    'no-use-before-define': 'error',
    // Helpful for React Native to ensure you don't forget to import React
    'react/react-in-jsx-scope': 'off', 
  },
};