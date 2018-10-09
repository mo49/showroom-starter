module.exports = {
    mode: 'development',
    entry: ['./src/js/script.js'],
    output: {
        filename: 'bundle.js',
        path: `${__dirname}/public/js`
    },
    devServer: {
        contentBase: 'public',
        open: true
    }
}