/**
 * Created by Administrator on 2018/11/7.
 */
const path = require('path');

const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:path.join(__dirname,"src/js/main.js"),
    output:{
        path:path.join(__dirname,"dist"),
        filename:"bundle.js"
    },
    mode: 'development', // 设置mode
    devServer:{
        open:true,
        hot:true,
        port:3000,
        contentBase:'src/js',
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template:path.join(__dirname,'src/js/index.html'),
            filename:'index.html'
        }),
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader' ]},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']}
        ]
    }
};
