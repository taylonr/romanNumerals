module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true
    },
    'extends': 'eslint:recommended',
    'parserOptions': {
        'sourceType': 'module'
    },
    'rules': {
        'indent': [ 1, 4 ],
        'linebreak-style': [1, 'unix' ],
        'quotes': [ 1, 'single' ],
        'semi': [ 1, 'always' ],
        'eol-last': 1
    }
};
