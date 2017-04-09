'use strict';

/**
 * Please see webpack config reference for better understanding:
 * https://webpack.github.io/docs/configuration.html
 */
const merge = require('webpack-merge');

let common = require('./webpack.common');

module.exports = function (env) {
    return merge(common, {

    });
};