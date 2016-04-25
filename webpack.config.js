'use strict';

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var ngTemplateLoader = (
    'ngtemplate?relativeTo=' + (path.resolve(__dirname, '/src/client')) + '!html'
);

module.exports = {
    context: path.join(__dirname, '/src/client'),
    entry: {
        app: [
            'webpack/hot/dev-server',
            './app/app.module'
        ]
    },
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        loaders: [{
                test: /\.scss$/,
                loader: 'style!css!sass?includePaths[]=' + path.resolve(__dirname, './node_modules')
            },
            // Optionally extract less files
            // or any other compile-to-css language
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!less-loader'
            }, {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            },
            // You could also use other loaders the same way. I. e. the autoprefixer-loader
            {
                test: /\.js$/,
                loader: 'ng-annotate',
                exclude: /node_modules/
            }, {
                test: /\.html$/,
                loader: ngTemplateLoader
            }, {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=application/font-woff'
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=application/font-woff'
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=application/octet-stream'
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file'
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=image/svg+xml'
            }, {
                test: /\.(png|jpe?g|gif|woff)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules', 'bower_components']
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
        ),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            '_': 'lodash'
        }),
        // definePlugin takes raw strings and inserts them, so you can put strings of JS if you want.
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true'))
        }),
        new HtmlWebpackPlugin({
            template: './index.ejs'
        })
    ]
};
