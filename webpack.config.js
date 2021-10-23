let path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const moduleObj = {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }
    ]
}

const client = {
    entry: {
        'client': './src/client/index.js'
    },
    target: 'web',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/public')
    },
    module: moduleObj,
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/client/index.html'
        })
    ]
    
};

const server = {
    entry: {
        'server': './src/server/index.js'
    },
    target: 'node',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: moduleObj
};

module.exports = [client, server];