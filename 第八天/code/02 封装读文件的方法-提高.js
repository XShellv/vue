/**
 * Created by Administrator on 2018/11/12.
 */
const fs = require("fs");
const path = require("path");

function readFile(dataPath, succ, err) {
    fs.readFile(dataPath,"utf-8",function (error,datastr) {
        if(error){
            return err(error)
        }
        succ(datastr)
    })
}

readFile(path.join(__dirname,"./files/12.txt"),function (datastr) {
   console.log(datastr);
    readFile(path.join(__dirname,"./files/2.txt"),function (datastr) {
        console.log(datastr)
        readFile(path.join(__dirname,"./files/3.txt"),function (datastr) {
            console.log(datastr)
        })
    })
},function (err) {
    console.log(err.message)
});