import path from 'path'
import webpack from 'webpack'
import htmlWebpackPlugin from 'html-webpack-plugin'

export default (env) => {
    return {
        context: __dirname,
        devtool: (env === 'development') ? 'eval-source-map' : 'cheap-module-source-map',
        target: 'electron-renderer',
        entry: {
            index: path.join(__dirname, 'src/index.js')
        },
        output: {
            path: path.join(__dirname, 'build'),
            filename: '[name].bundle.js',
            publicPath: '/',
            sourceMapFilename: '[file].map',
    
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: path.join(__dirname, 'node_modules'),
                    use: ['eslint-loader'],
                    enforce: 'pre'
                }, {
                    test: /\.jsx?$/,
                    exclude: path.join(__dirname, 'node_modules'),
                    use: ['babel-loader']
                }, {
                    test: /\.vue$/,
                    exclude: path.join(__dirname, 'node_modules'),
                    use: ['vue-loader']
                }, {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }, {
                    test: /\.(png|svg)$/,
                    use: ['file-loader']
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx', '.css'],
        },
        plugins: [
            new webpack.optimize.ModuleConcatenationPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin(),
            new webpack.EnvironmentPlugin({
                NODE_ENV: env
            }),
            new htmlWebpackPlugin({
                template: path.join(__dirname, 'index.tmpl.html'),
                filename: 'index.html',
                inject: true
            })
        ],
        node: {
            __dirname: true,
            __filename: true
        },
        devServer: {
            contentBase: path.join(__dirname, 'build'),
            compress: true,
            host: 'localhost',
            port: 9000,
            hot: true
        }
    }
}