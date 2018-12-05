/**
 * Created by Administrator on 2018/11/12.
 */
const fs = require("fs");

function readFile(filePath) {
    return new Promise(function (resolve,reject) {
        fs.readFile(filePath,"utf-8", (err,suc) => {
            if(err){
                return reject(err)
            }
            resolve(suc)
        })
    });
}

readFile("./files/12.txt")
    .then( function(data){
    console.log(data);
    return readFile("./files/2.txt")
}).then(function (data) {
    console.log(data);
    return readFile("./files/32.txt")
}).then(function (data) {
    console.log(data)
}).catch(function (err) {
    console.log("我自己的处理方式"+err.message)
});

