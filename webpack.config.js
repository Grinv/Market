const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './src/entry.js',
    output: {
        path: path.join(__dirname, './build'),
        publicPath: './build/',
        filename: 'bundle.js'
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                context: './src/img/svg',
                from: '**/*',
                to: './res/svg'
            }
        ]),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.jQuery": 'jquery'
        }),
        new UglifyJsPlugin()
    ],
    module: {
        rules: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
        },
        { test: /\.woff$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=public/fonts/[name].[ext]' },
        { test: /\.woff2$/, loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=public/fonts/[name].[ext]' },
        { test: /\.[ot]tf$/, loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=public/fonts/[name].[ext]' },
        { test: /\.eot$/, loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=public/fonts/[name].[ext]' },

            {
                test: /\.(?:png|gif|jpg|svg)$/,
                oneOf: [
                    {
                        resourceQuery: /inline/,
                        use: 'url-loader'
                    },
                    {
                        loader: 'file-loader?name=res/[name].[ext]'
                    }
                ]
            }]
    }
};