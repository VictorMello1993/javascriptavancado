const fs = require('fs');
const pth = require('path')

// //Leitura síncrona
const readDirectorySync = function(path){
    let files = fs.readdirSync(path);
    return files.map(f => pth.join(path, f))
}

//Leitura assíncrona
const readDirectoryAsync = function (path) {
    return new Promise((resolve, reject) => {
        try {
            let files = fs.readdirSync(path);            
            files = files.map(f => pth.join(path, f)) 
            resolve(files)
        } catch (e) {
            reject(e)
        }
    })
}


module.exports = {
    readDirectorySync,
    readDirectoryAsync
}

