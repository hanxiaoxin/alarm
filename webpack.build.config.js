const getWebpackConfig = require("./scripts/getWebpackConfig");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const config = getWebpackConfig();

config.mode = 'production';

config.devtool = false;

config.output.publicPath = './';

config.optimization = {
    minimize: true,
    minimizer: [
        new TerserPlugin({}),
        new CssMinimizerPlugin(),
    ],
}

module.exports = config;
