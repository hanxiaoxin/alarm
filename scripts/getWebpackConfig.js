const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appDirectory = fs.realpathSync(process.cwd());

const resolve = (relativePath) => {
    return path.resolve(appDirectory, relativePath);
}

const config = {
    entry: {
        index: resolve('./src/index.jsx'),
    },
    output: {
        publicPath: '/',
        path: resolve('./dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /.s?css$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: false
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test:/\.(png|jpg|gif|jpeg)$/,
                exclude: /node_modules/,
                use:[{
                    loader:'url-loader',
                    options: {
                        limit: 1024
                    }
                }]
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader?name=fonts/[name].[hash:8].[ext]',
                    },
                ],
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: resolve('./public/index.html'),
        }),
    ],
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
        alias: {
            '$styles': resolve('./src/assets/styles'),
            '$images': resolve('./src/assets/images'),
            '$components': resolve('./src/components'),
            '$views': resolve('./src/views'),
            '$hooks': resolve('./src/hooks'),
            '$contexts': resolve('./src/contexts'),
        }
    }
};

function getWebpackConfig(){
    return config;
}

module.exports = getWebpackConfig;
