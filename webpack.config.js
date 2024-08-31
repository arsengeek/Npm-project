const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',  
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),  
    },
    devServer: {
        static: './dist',
        hot: true,  
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.pug',  
        }),
        new MiniCssExtractPlugin({ filename: '[name].css' })  
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: 'pug-loader',
                        options: {
                            pretty: true,  
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    }
};
