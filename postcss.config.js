module.exports = {
    plugins: [
        require("postcss-assets")({
            loadPaths: ["img/"]
        }),
        require("autoprefixer")()
    ]
};