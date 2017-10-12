import path from 'path';
import webpack from 'webpack';

export default {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: `dist/[name].min.js`
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.js'],
        modules: [__dirname, path.join(__dirname, 'node_modules')]
    },
    externals: {
        vue: 'Vue',
        'intro.js': 'introJs'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: [__dirname]
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        })
    ]
};
