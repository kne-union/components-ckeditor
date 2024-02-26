const {CracoRemoteComponentsPlugin} = require("@kne/modules-dev");
const aliasConfig = require("./webstorm.webpack.config");
const {getLoader, addBeforeLoader} = require("@craco/craco");

process.env.CI = false;

module.exports = {
    webpack: {
        alias: aliasConfig.resolve.alias, configure: (webpackConfig) => {
            const definePlugin = webpackConfig.plugins.find((plugin) => plugin.constructor.name === "DefinePlugin");
            Object.assign(definePlugin.definitions["process.env"], {
                DEFAULT_VERSION: `"${process.env.npm_package_version}"`
            });

            addBeforeLoader(webpackConfig, (loader) => {
                return loader.use && loader.use[0]?.loader === require.resolve('@svgr/webpack');
            }, {
                test: /.*\.raw\.svg$/, loader: 'raw-loader'
            });


            return webpackConfig;
        }
    }, plugins: [{
        plugin: CracoRemoteComponentsPlugin
    }]
};
