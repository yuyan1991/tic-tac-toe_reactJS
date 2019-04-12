const webpack = require('webpack');

module.exports = {
    entry: __dirname + "/src/main/index.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        port: 2333
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use:  ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader",
                        options: {
                          modules: true, // 指定启用css modules
                          localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                        }
                    }
                ]
            }
        ]
    },
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究')
    ]
};
