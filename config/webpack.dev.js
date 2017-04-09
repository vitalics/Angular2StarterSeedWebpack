'use strict';

/**
 * Please see webpack config reference for better understanding:
 * https://webpack.github.io/docs/configuration.html
 */
const merge = require('webpack-merge');

let common = require('./webpack.common');

module.exports = function (env) {
    return merge(common, {
        output: {
            path: './build',
            publicPath: 'http://localhost:9045/',
            filename: '[name].js',
            chunkFilename: '[id].chunk.js',
            sourceMapFilename: '[name].map'
        },

        devtool: 'source-map',

        devServer: {
            historyApiFallback: true,
            stats: 'minimal',
            outputPath: 'dist',
            host: 'localhost',
            port: 9045,
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000
            }
        }
    });
};