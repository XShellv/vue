/**
 * Created by Administrator on 2018/11/12.
 */
const fs = require("fs");
const path = require("path");

// fs.readFile(path.join(__dirname,"./files/2.txt"),"utf-8",function (err,datastr) {
//     if(err){
//         throw err;
//     }
//     console.log(datastr)
// });

//使用回调函数接收
function readFileFunc(filePath,callback) {
    fs.readFile(filePath,"utf-8",function (err,datastr) {
        if(err){
            return callback(err);
        }
        callback(null,datastr)
    });
}

readFileFunc(path.join(__dirname,'./files/23.txt'),function (err,datastr) {
    if(err){
        return console.log(err.message)
    }
    console.log(datastr)
});
