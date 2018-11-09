const SystemJSPlugin = require('webpack-systemjs-bundle-plugin/');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
let nodeExternals = require('webpack-node-externals');
const UpdateExportedBundlePlugin = require('./src/main/javascript/plugins/UpdateExportedBundlePlugin');
const ExternalFunction = require('./src/main/javascript/plugins/ExternalFunction');

const config = {
    entry: {
        'bundleExport': path.resolve(__dirname, 'src/main/javascript/app2/main.js'),
    },
    output: {
        path: path.resolve(__dirname, 'src/main/resources/javascript/exportedBundles/'),
        filename: "[name].js",
        libraryTarget: "this",
        library: "myLib"
    },

    externals: [
        ExternalFunction("http://localhost:8080")
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    resolve: {
        mainFields: ["module", "main", "browser"],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    plugins: [
        new VueLoaderPlugin(),
        new UpdateExportedBundlePlugin()
    ],

    mode: "development",
    devtool: 'cheap-source-map'
};

module.exports = config;