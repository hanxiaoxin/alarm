const getWebpackConfig = require("./scripts/getWebpackConfig");
const {ESBuildPlugin, ESBuildMinifyPlugin} = require('esbuild-loader');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin2');
const path = require("path");


const config = getWebpackConfig();

config.mode = 'production';

config.module.rules[0] = {
    test: /(\.js|\.jsx)$/,
    loader: 'esbuild-loader',
    options: {
        loader: 'jsx', // Remove this if you're not using JSX
        target: 'es2015' // Syntax to compile to (see options below for possible values)
    }
};

config.optimization = {
    minimize: true,
    minimizer: [
        new ESBuildMinifyPlugin({
            target: 'es2015'
        }),
    ],
    splitChunks: {
        chunks: 'async',
        cacheGroups: {
            vendors: {
                test: /[\\/]node_modules[\\/]/,
                priority: -10
            },
            default: {
                minChunks: 1,
                priority: -20,
                reuseExistingChunk: true
            }
        }
    },
};

config.plugins.push(new ESBuildPlugin(), new CssMinimizerPlugin(), new Visualizer({
    filename: path.join('..', 'stats', 'statistics.html'),
}),);


module.exports = config;
