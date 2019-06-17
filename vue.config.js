module.exports = {
    configureWebpack: {
        externals: {
            commonjs: 'intro.js',
            commonjs2: 'intro.js',
            amd: 'intro.js',
            root: 'introJs',
        },
    },
};
