const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        vendor: [
            'react',
            'immutable',
            'react-dom',
            'immutable/contrib/cursor',
            'prop-types',
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ],
            },
        ]
    },

    output: {
        path: path.join(__dirname, '__build__/dll'),
        filename: '[name].dll.js',
        library: '[name]_library'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, '__build__/dll', '[name]-manifest.json'),
            name: '[name]_library'
        }),

        // 压缩
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),

        // 生产环境
        // new webpack.DefinePlugin({
        //     "process.env": {
        //         NODE_ENV: JSON.stringify("production")
        //     }
        // })
    ],
};
