/* eslint-env node */
module.exports = {
    entry: {
        app: './demos/webpack/webpack.demo.js'
    },
    devtool: 'eval',
    output: {
        filename: './demos/webpack/demo.bundle.js'
    },
    module: {
        loaders: [{
            test: /(\.js)$/,
            loader: 'babel-loader'
        }]
    }
};

