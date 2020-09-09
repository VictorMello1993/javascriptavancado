const fs = require('fs');
const pth = require('path')

//Leitura do diretório (forma síncrona)
function readDirectorySync(path) {
    //Com mutabilidade
    // let files = fs.readdirSync(path);
    // return files.map(f => pth.join(path, f))
    
    //Sem mutabilidade
    const files = fs.readdirSync(path);
    return files.map(f => pth.join(path, f))
}

//Leitura do diretório (forma assíncrona)
function readDirectoryAsync(path) {
    return new Promise((resolve, reject) => {
        try {
            //Sem mutabilidade
            const files = fs.readdirSync(path);
            const completeFiles = files.map(f => pth.join(path, f))
            resolve(completeFiles)

            // //Com mutabilidade
            // let files = fs.readdirSync(path);
            // files = files.map(f => pth.join(path, f))
            // resolve(files)
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
    //Sem mutabilidade
    return lines.map(ln => {
        return tokens.reduce((acc, token) => {
            return acc.split(token).join('')
        }, ln)
    })


    //Com mutabilidade
    // return lines.map(ln => {
    //     let textWithoutTokens = ln
    //     tokens.forEach(tk => {
    //         textWithoutTokens = textWithoutTokens.split(tk).join('')
    //     })
    //     return textWithoutTokens
    // })
}

//Ou
//Função retornando uma outra função
function removeTokens(tokens) {
    //Sem mutabilidade
    return function (lines) {
        return lines.map(ln => {
            return tokens.reduce((acc, token) => {
                return acc.split(token).join('')
            }, ln)
        })
    }

    //Com mutabilidade
    // return function (lines) {
    //     return lines.map(ln => {
    //         let textWithoutTokens = ln
    //         tokens.forEach(tk => {
    //             textWithoutTokens = textWithoutTokens.split(tk).join('')
    //         })
    //         return textWithoutTokens
    //     })
    // }
}
//----------------------------------------------------------------------------------------------

function groupElements(words) {
    return Object.values(words.reduce((acc, word) => {
        const el = word.toLowerCase()
        const qte = acc[el] ? acc[el].qte + 1 : 1
        acc[el] = { element: el, qte }
        return acc
    }, {}))
}

function orderByQte(attr, order = 'asc') {
    return function (array) {
        const asc = (o1, o2) => o1[attr] - o2[attr]
        const desc = (o1, o2) => o2[attr] - o1[attr]
        return array.sort(order === 'asc' ? asc : desc)
    }
}

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
    groupElements,
    orderByQte
}

