const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/js/app.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-react'
                        ],
                        plugins: ['transform-class-properties'] //allow arrow functions in react class
                    }
                }
            },
            {
                test: /\.(css)$/,
                use: [{
                    loader: 'css-loader', // translates CSS into CommonJS modules
                }]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        // Re-generate index.html with injected script tag.
        // The injected script tag contains a src value of the
        // filename output defined above.
        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve('index.html'),
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, '/'),//'./dist'
        hot: true,
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    optimization: {
        minimize: false
    }
};