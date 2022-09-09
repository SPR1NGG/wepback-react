const {merge} = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
        mode: "development",
        devServer: {
            compress: true,
            open: true,
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                importLoaders: 1,
                                modules: true,
                            },
                        },
                    ],
                    include: /\.module\.css$/,
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"],
                    exclude: /\.module\.css$/,
                },
                {
                    test: /\.module\.s([ac])ss$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                },
                {
                    test: /\.s([ac])ss$/,
                    exclude: /\.module.(s([ac])ss)$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                },
                {
                    test: /\.(png|jp(e*)g|gif)$/,
                    use: ['file-loader'],
                },
                {
                    test: /\.svg$/,
                    loader: "@svgr/webpack",
                    issuer: /\.[jt]sx?$/,
                    options: {
                        typescript: true,
                        ext: "tsx",
                    }
                },
                {
                    test: /\.?(js(x))$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                    }
                },
                {
                    test: /\.ts(x)?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ]
        },
        optimization: {
            minimizer: [
                new CssMinimizerPlugin(),
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css',
                chunkFilename: '[id].css'
            })
        ],

    }
)