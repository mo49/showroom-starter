const path = require('path');
const readConfig = require('read-config');
const routeDataMapper = require('webpack-route-data-mapper')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const SRC = './src';
const DEST = './public';

const constants = readConfig(`${SRC}/constants.yml`);

const htmlTemplates = routeDataMapper({
    baseDir: `${SRC}/pug/page`,
    src: '**/[!_]*.pug',
    locals: Object.assign(
        {},
        constants,
        {
            meta: readConfig(`${SRC}/pug/meta.yml`)
        }
    )
})

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
                        'postcss-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                includePaths: [ `${SRC}/scss` ],
                            },
                        },
                    ]
                }),
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            }
        ]
    },
    devServer: {
        contentBase: DEST,
        open: true,
    },
    plugins: [
        ...htmlTemplates,
        // css
        new ExtractTextPlugin('[name]')
    ],
    cache: true,
    resolve: {
        extensions: ['.js', '.json', '.scss', '*'],
    },
}