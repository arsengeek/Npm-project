const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: './src/index.js', 
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
            clean: true, 
        },
        mode: isProduction ? 'production' : 'development',  
        devServer: {
            static: path.resolve(__dirname, 'dist'),  
            hot: true,  
            open: true,  
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html', 
            }),
            new MiniCssExtractPlugin({
                filename: '[name].css',
            }),
            new webpack.HotModuleReplacementPlugin()  
        ],
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader'
                    ]
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        }
    };
};
