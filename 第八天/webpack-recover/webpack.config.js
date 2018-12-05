/**
 * Created by Administrator on 2018/11/11.
 */
const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode:"development",
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
    module:{
        rules:[
            {test:/\.css$/,use:["style-loader","css-loader"]},
            {test:/\.scss$/,use:["style-loader","css-loader","sass-loader"]},
            {test:/\.less$/,use:["style-loader","css-loader","less-loader"]},
            {test:/\.(ttf|eot|woff|woff2|svg)$/,use:"url-loader"},
            {test:/\.(jpg|jpeg|gif|bmp|png)$/,use:"url-loader?limit=7531&name=[hash:12]-[name]-[ext]"},
            {test:/\.js$/,use:"babel-loader",exclude:/node_modules/},
            {test:/\.vue$/,use:"vue-loader"}
        ]
    },
    resolve:{
        alias:{
            // "vue$":"vue/dist/vue.js"
        }
    }
};