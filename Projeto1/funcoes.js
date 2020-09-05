const fs = require('fs');
const pth = require('path')

// //Leitura do diretório (forma síncrona)
function readDirectorySync(path){
    let files = fs.readdirSync(path);
    return files.map(f => pth.join(path, f))
}

//Leitura do diretório (forma assíncrona)
function readDirectoryAsync (path) {
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

function filterFilesByExtension(files, extension){
    return files.filter(f => f.endsWith(extension))
}

function readFileByPathAsync(path){
    return new Promise((resolve, reject) => {
        const content = fs.readFileSync(path, {encoding: 'utf-8'})
        resolve(content.toString())
    })    
}

function readFilesByPathAsync(paths){
    return Promise.all(paths.map(path => readFileByPathAsync(path)))

    // Minha resolução
    //------------------------------------------------------------------------------------------------
    // return new Promise((resolve, reject) => {
    //     try{
    //         let contents = paths.map(p => fs.readFileSync(p).toString())                                
    //         resolve(contents)               
    //     } catch (e) {
    //         reject(e)
    //     }
    // })
    //------------------------------------------------------------------------------------------------
}

function splitFilesInLines(contents){    
    return contents.join('\n').split('\n')
}

function removeBlankLines(lines){
    return lines.filter(ln => ln.trim())
}

function removeLinesEndingWithTimeInterval(lines, textPattern){
    return lines.filter(ln=> !ln.includes(textPattern))
}           

function removeOnlyNumbers(lines){
    return lines.filter(ln=> !/\d+/.test(ln))
}

module.exports = {
    readDirectorySync,
    readDirectoryAsync,
    filterFilesByExtension,
    readFilesByPathAsync,
    readFilesByPathAsync,
    splitFilesInLines,
    removeBlankLines,
    removeLinesEndingWithTimeInterval,
    removeOnlyNumbers
}

