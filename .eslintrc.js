module.exports = {
  // extends: ['airbnb-base', 'airbnb/hooks', 'prettier'],
  rules: {
    'comma-dangle': ['error', 'never'],
    // 'space-before-function-paren': 1,
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
      },
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'if',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'return',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'function',
      },
      {
        blankLine: 'always',
        prev: 'block-like',
        next: '*',
      },
    ],
    curly: ['error', 'all'],
    'lines-between-class-members': ['error', 'always'],
    'object-curly-spacing': ['error', 'always'],
  },
}
