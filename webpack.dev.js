const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development', // automatically configures DefinePlugin
    devtool: 'inline-source-map', // strong source mapping
    devServer: {
        contentBase: './dist'
    }
});