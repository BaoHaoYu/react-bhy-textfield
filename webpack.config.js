const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: './src/index.js',

    output: {
        filename: 'react-bhy-textfield.js',

        path: path.resolve(__dirname, 'dist'),

        libraryTarget: 'umd'
    },

    target: 'node',

    watch: !0,

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                ],
                exclude: /(node_modules|bower_components)/,
            },

            {
                test: /\.styl$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: !0,
                            importLoaders: 1,
                            localIdentName: '[local]__[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: function () {
                                return [
                                    require('precss'),
                                    require('autoprefixer')({browsers: 'last 100 versions'})
                                ];
                            }
                        }
                    },
                    {loader: 'stylus-loader'},
                ],
            },
        ],
    },

    externals: ['react', 'immutable', 'immutable/contrib/cursor', 'prop-types'],

    plugins: [
        // mini
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false
        //     }
        // }),
        // env
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        // }),
    ]
};