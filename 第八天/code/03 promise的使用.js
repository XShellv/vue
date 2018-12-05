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

readFile("./files/2.txt").then(data => {
    console.log(data+"///////")
},err => {
    console.log(err.message)
});

