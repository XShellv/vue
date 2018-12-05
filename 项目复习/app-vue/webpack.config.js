/**
 * Created by Administrator on 2018/11/9.
 */

const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    //设置vue环境
    mode:"development",
    //将打包入口和出口暴露
    entry:path.join(__dirname,"./src/main.js"),
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
    module: {
        rules:[
            {test:/\.vue$/,use:"vue-loader"},
            {test:/\.css$/,use:["style-loader","css-loader"]},
            {test:/\.scss$/,use:["style-loader","css-loader","sass-loader"]},
            {test:/\.less$/,use:["style-loader","css-loader","less-loader"]},
            {test:/\.js$/,use:"babel-loader",exclude:/node_modules/},
            {test:/\.(jpg|png|bmp|gif|jpeg)$/,use:"url-loader"},
            {test:/\.(ttf|svg|woff|woff2|eot)$/,use:"url-loader"}
        ]
    }
};
