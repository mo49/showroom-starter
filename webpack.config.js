const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SRC = './src';
const DEST = './public';

module.exports = {
    mode: 'development',
    entry: {
        'js/script.js': `${SRC}/js/script.js`,
        'css/style.css': `${SRC}/scss/style.scss`,
    },
    output: {
        filename: '[name]',
        path: path.resolve(__dirname, DEST),
        publicPath: ''
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                options: {
                    compact: true,
                    cacheDirectory: true,
                }
            },
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: 'pug-loader',
                        options: {
                            root: path.resolve(`${SRC}/pug/`),
                            pretty: true,
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 2,
                            }
                        },
                        {
                            loader: 'sass-loader',
                        },
                    ]
                })
            }
        ]
    },
    devServer: {
        contentBase: DEST,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: `index.html`,
            template: `${SRC}/pug/page/index.pug`
        }),
        // css
        new ExtractTextPlugin('[name]')
    ],
    // cache: true,
    resolve: {
        extensions: ['.js', '.json', '*'],
    },
}