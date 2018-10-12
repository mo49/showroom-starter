module.exports = {
    plugins: [
        require('postcss-assets')({
            basePath: `public/`,
            loadPaths: [ `img/` ],
        }),
        require('autoprefixer')({
            browsers: ['last 2 versions']
        }),
        require('cssnano')({
            autoprefixer: false
        })
    ]
};