const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'production', // loads TerserPlugin
    devtool: 'source-map' // Avoid inline-*** and eval-*** use in production as they can increase bundle size and reduce the overall performance.
});