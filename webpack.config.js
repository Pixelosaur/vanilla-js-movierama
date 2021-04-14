const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgeCSSPlugin = require('purgecss-webpack-plugin')
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        liveReload: false
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin({}),
        new HtmlWebpackPlugin({
                                  title: 'Movierama in Vanilla JS',
                                  meta: {viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'}
                              }),
        new MiniCssExtractPlugin({
                                     filename: '[name].css',
                                     chunkFilename: '[id].css'
                                 }),
        new PurgeCSSPlugin({
                               paths: glob.sync(`${PATHS.src}/**/*`,  { nodir: true }),
                           }),
        new ImageMinimizerPlugin({
                                     minimizerOptions: {
                                         // Lossless optimization with custom option
                                         plugins: [
                                             ['gifsicle', {interlaced: true}],
                                             ['jpegtran', {progressive: true}],
                                             ['optipng', {optimizationLevel: 5}],
                                             [
                                                 'svgo',
                                                 {
                                                     plugins: [
                                                         {
                                                             removeViewBox: false
                                                         }
                                                     ]
                                                 }
                                             ]
                                         ]
                                     }
                                 }),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // fallback to style-loader in development
                    process.env.NODE_ENV !== 'production'
                    ? 'style-loader'
                    : MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Successfully use url() in variables and mixins
                    'resolve-url-loader',
                    // Compiles Sass to CSS
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                type: 'asset'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }
};

