// Decs: Creating a webpack config file. This is the file that webpack will use to build our project.
// This file will be used to create a bundle.js file that will be used in our index.html file.
// ===============================================================

// Importing plugins
// ===============================================================
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');
// ===============================================================

// Exporting webpack config
// ===============================================================
module.exports = () => {
    return {
        mode: 'development',
        entry: {
            main: './src/js/index.js',
            install: './src/js/install.js'
        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist'),
        },
        plugins: [

            // Plugin to add html file to dist folder
            new HtmlWebpackPlugin({
                template: './index.html',
                title: 'J.A.T.E'
            }),

            // adding mini css extract plugin to extract css to a separate file
            new MiniCssExtractPlugin(),

            // adding inject manifest plugin to inject manifest file into service worker
            new InjectManifest({
                swSrc: './src-sw.js',
                swDest: 'sw.js',
            }),

        ],

        // setting rules for webpack to follow when building project files
        module: {
            rules: [

                {
                    test: /\.css$/i,
                    use: [MiniCssExtractPlugin.loader, 'css-loader'],
                },

                {
                    test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                    use: 'asset/resource',
                },

                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'], // this preset will include all plugins to support modern JavaScript
                            plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-transform-runtime'],
                            // the first plugin is used to transpile object rest and spread properties to ES5
                            // the second plugin is used to avoid duplication of helper functions in every file
                        },
                    },
                },

            ],
        },
    };
};
// ===============================================================