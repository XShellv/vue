/**
 * Created by Administrator on 2018/11/9.
 */
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname,"./src/main.js"),
    output:{
        path:path.join(__dirname,"./dist"),
        filename:"bundle.js"
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,"./src/index.html"),
            filename:"index.html"
        })
    ],
    module:{
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.(png|jpg|bmp|jpeg|gif)$/,use:'url-loader?limit=7631&name=[hash:8]-[name]-[ext]'},
            {test:/\.(eot|ttf|woff|woff2|svg)$/,use:'url-loader'},
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
        ]
    }
};
