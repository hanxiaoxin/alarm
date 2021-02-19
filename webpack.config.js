const getWebpackConfig = require("./scripts/getWebpackConfig");

const webpack = getWebpackConfig();

webpack.mode = 'development';

module.exports = webpack;
