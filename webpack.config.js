const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "./css/style.css",
});

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src/index.js'
        ],
    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']

            },
            {
                test: /\.(scss)$/,
                use: extractSass.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                        loader: "css-loader"
                    },
                        {
                        loader: "sass-loader"
                    }]
                })
            }
        ]
    },
    plugins: [
        extractSass,
        new webpack.HotModuleReplacementPlugin()


    ],
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    devServer: {
        contentBase: './public',
        hot: true
    },
};