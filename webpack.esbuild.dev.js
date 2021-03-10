const getWebpackConfig = require("./scripts/getWebpackConfig");
const {ESBuildPlugin} = require('esbuild-loader');


const config = getWebpackConfig();

config.mode = 'development';

// remove babel loader
config.module.rules[0] = {
    test: /(\.js|\.jsx)$/,
    loader: 'esbuild-loader',
    options: {
        loader: 'jsx', // Remove this if you're not using JSX
        target: 'es2015' // Syntax to compile to (see options below for possible values)
    }
};

config.plugins.push(new ESBuildPlugin());

config.optimization = {
    minimize: false,
};

module.exports = config;
