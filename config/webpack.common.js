'use strict';

/**
 * Please see webpack config reference for better understanding:
 * https://webpack.github.io/docs/configuration.html
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
        'vendor': './src/vendor.ts',
        'polyfills': './src/polyfills.ts',
        'app': './src/main.ts'
    },

    output: {
        path: path.resolve('./build'),
        filename: '[name].bundle.js',
        chunkFilename: '[id].chunk.js',
        sourceMapFilename: '[name].map'
    },

    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            path.resolve('./src'),
            'node_modules'
        ]
    },

    module: {
        rules: [
            // {
            //     enforce: 'pre',
            //     test: /\.ts?$/,
            //     loader: 'tslint-loader',
            //     exclude: /(node_modules)/,
            //     options: {
            //         // tslint errors are displayed by default as warnings
            //         // set emitErrors to true to display them as errors
            //         emitErrors: false,

            //         // tslint does not interrupt the compilation by default
            //         // if you want any file with tslint errors to fail
            //         // set failOnHint to true
            //         failOnHint: false,

            //         // path to directory containing formatter (optional)
            //         formattersDirectory: "node_modules/tslint-loader/formatters/",

            //         // These options are useful if you want to save output to files
            //         // for your continuous integration server
            //         fileOutput: {
            //             // The directory where each file's report is saved
            //             dir: "./lint_out/",

            //             // The extension to use for each report's filename. Defaults to "txt"
            //             ext: "xml",

            //             // If true, all files are removed from the report directory at the beginning of run
            //             clean: true,

            //             // A string to include at the top of every report file
            //             // Useful for some report formats
            //             header: "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<checkstyle version=\"5.7\">",

            //             // A string to include at the bottom of every report file
            //             // Useful for some report formats
            //             footer: "</checkstyle>"
            //         }
            //     }
            // },

            /**
             * Loader for TypeScript.
             * No need to exclude tests by `(spec|e2e)` mask here, as they are in separate directory.
             *
             * See project repository for details / configuration reference:
             * https://github.com/s-panferov/awesome-typescript-loader
             */
            {
                test: /\.ts$/,
                use: [{
                    loader: 'awesome-typescript-loader'
                }]
            },

            /**
             * Loaders for HTML templates, JSON files, Less stylesheets. See details at projects' repositories:
             *
             * https://github.com/webpack/json-loader
             * https://github.com/webpack/html-loader
             * https://github.com/gajus/to-string-loader
             */
            {
                test: /\.json$/,
                use: [{
                    loader: 'json-loader'
                }]
            },
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader'
                }]
            },
            {
                test: /\.less$/,
                use: ['css-loader', 'less-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }]
            }
        ]
    },

    plugins: [
        /**
         * This plugin is a part of `awesome-typescript-loader`, it allows to run type checking in a separate process,
         * so webpack won't wait for it.
         */
        // new ForkCheckerPlugin(),

        /**
         * Quote from webpack docs: "Assign the module and chunk ids by occurrence count. Ids that are used often get
         * lower (shorter) ids. This make ids predictable, reduces total file size and is recommended."
         *
         * See https://webpack.github.io/docs/list-of-plugins.html#occurrenceorderplugin
         */
        // new webpack.optimize.OccurenceOrderPlugin(true),

        new HtmlWebpackPlugin({
            title: 'Hello World Application',
            template: 'src/index.ejs',
            chunksSortMode: 'dependency',
            inject: false
        }),

        /**
         * This plugin helps to share common code between pages.
         *
         * For more info see:
         * https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
         * https://github.com/webpack/docs/wiki/optimization#multi-page-app
         */
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor']
        })
    ]
};