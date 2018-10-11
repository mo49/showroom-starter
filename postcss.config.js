module.exports = {
    plugins: [
        require('autoprefixer')(),
        require('postcss-assets')({
            basePath: `public/`,
            loadPaths: [ `img/` ],
        }),
    ]
};