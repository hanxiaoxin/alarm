const getWebpackConfig = require("./scripts/getWebpackConfig");

const config = getWebpackConfig();

config.mode = 'development';

module.exports = config;
