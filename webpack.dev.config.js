const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.common.config.js');

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: "./dist",
        port: "8088",
        inline: true, // refresh after modified the files
        historyApiFallback: true,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});