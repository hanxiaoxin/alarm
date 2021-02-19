const getWebpackConfig = require("./scripts/getWebpackConfig");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const webpack = getWebpackConfig();

webpack.mode = 'production';

webpack.devtool = false;

webpack.optimization = {
    minimize: true,
    minimizer: [
        new TerserPlugin({}),
        new CssMinimizerPlugin(),
    ],
}

module.exports = webpack;
