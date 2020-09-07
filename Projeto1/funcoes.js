const fs = require('fs');
const pth = require('path')

// //Leitura do diretório (forma síncrona)
function readDirectorySync(path) {
    let files = fs.readdirSync(path);
    return files.map(f => pth.join(path, f))
}

//Leitura do diretório (forma assíncrona)
function readDirectoryAsync(path) {
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

//----------------------------------------------------------------------------------------------
//Forma tradicional
function filterFilesByExtension(files, extension) {
    return files.filter(f => f.endsWith(extension))
}

//Ou

//Função retornando uma outra função
function filterFilesByExtension(extension) {
    return function (files) {
        return files.filter(f => f.endsWith(extension))
    }
}
//----------------------------------------------------------------------------------------------

function readFileByPathAsync(path) {
    return new Promise((resolve, reject) => {
        const content = fs.readFileSync(path, { encoding: 'utf-8' })
        resolve(content.toString())
    })
}

function readFilesByPathAsync(paths) {
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
    //--------------------------------------------------------------------------------------------------------------------------------
}

function mergeContents(contents) {
    return contents.join(' ')
}

//Forma tradicional
//--------------------------------------------------------------------------------------------------------------------------------
function separateBy(contents, token) {
    return contents.split(token)
}

//Ou

//Função retornando uma outra função
function separateBy(token) {
    return function (contents) {
        return contents.split(token)
    }
}
//--------------------------------------------------------------------------------------------------------------------------------

function removeBlankLines(lines) {
    return lines.filter(ln => ln.trim())
}

//--------------------------------------------------------------------------------------------------------------------------------
// Forma tradicional
function removeLinesEndingWithTimeInterval(lines, textPattern) {
    return lines.filter(ln => !ln.includes(textPattern))
}

//Ou

//Função retornando uma outra função
function removeLinesEndingWithTimeInterval(textPattern) {
    return function (lines) {
        return lines.filter(ln => !ln.includes(textPattern))
    }
}
//--------------------------------------------------------------------------------------------------------------------------------

function removeOnlyNumbers(lines) {
    return lines.filter(ln => !/\d+/.test(ln))
}

// Forma tradicional
//----------------------------------------------------------------------------------------------
function removeTokens(lines, tokens) {
    return lines.map(ln => {
        let textWithoutTokens = ln
        tokens.forEach(tk => {
            textWithoutTokens = textWithoutTokens.split(tk).join('')
        })
        return textWithoutTokens
    })
}

//Ou
//Função retornando uma outra função
function removeTokens(tokens) {
    return function (lines) {
        return lines.map(ln => {
            let textWithoutTokens = ln
            tokens.forEach(tk => {
                textWithoutTokens = textWithoutTokens.split(tk).join('')
            })
            return textWithoutTokens
        })
    }
}
//----------------------------------------------------------------------------------------------

module.exports = {
    readDirectorySync,
    readDirectoryAsync,
    filterFilesByExtension,
    readFilesByPathAsync,
    readFilesByPathAsync,
    separateBy,
    removeBlankLines,
    removeLinesEndingWithTimeInterval,
    removeOnlyNumbers,
    removeTokens,
    mergeContents,
}

