const fs = require('fs')
const pth = require('path')
const { Observable } = require('rxjs')

function addZero(num) {
    if (num <= 9) {
        return '0' + num;
    }
    else {
        return num;
    }
}

function getDateNow() {
    return (addZero(new Date().getDate())) + '/' + (addZero(new Date().getMonth())) + '/' + new Date().getFullYear()
}

//Leitura do diretório - Operador de criação do observable
function readDirectoryAsync(path) {
    return new Observable((subscriber,) => {
        try {
            fs.readdirSync(path).forEach(file => {
                subscriber.next(pth.join(path, file))
            })
            subscriber.complete()
        } catch (e) {
            subscriber.error(e)
        }
    })
}

//----------------------------------------------------------------------------------------------
function filterFilesByExtension(extension) {
    return createPipeableOperator(subscriber => ({
        next(text) {
            if (text.endsWith(extension)) {
                subscriber.next(text)
            }
        }
    }))
}
//----------------------------------------------------------------------------------------------

function readFileByPathAsync() {
    return createPipeableOperator(subscriber => ({
        next(path) {
            try {
                const content = fs.readFileSync(path, { encoding: 'utf-8' })
                subscriber.next(content.toString())                
            }
            catch (e) {
                subscriber.error('Erro na leitura de um arquivo')
            }
        }
    }))
}

function mergeContents() {
    return createPipeableOperator(subscriber => ({
        next(text) {
            subscriber.next(text.split('').join(' '))
        }
    }))
}

//--------------------------------------------------------------------------------------------------------------------------------
function separateBy(token) {
    return createPipeableOperator(subscriber => ({
        next(file) {
            file.split(token).forEach(e => {
                subscriber.next(e)
            })
        }
    }))
}

function removeBlankLines() {
    return createPipeableOperator(subscriber => ({
        next(text) {
            if (text.trim()) {
                subscriber.next(text)
            }
        }
    }))
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

function removeOnlyNumbers() {
    return createPipeableOperator(subscriber => ({
        next(text) {
            if (!/\d+/.test(text)) {
                subscriber.next(text)
            }
        }
    }))
}

function removeTokens(tokens) {
    return createPipeableOperator(subscriber => ({
        next(text) {
            const textWithoutTokens = tokens.reduce((acc, token) => {
                return acc.split(token).join('')
            }, text)
            subscriber.next(textWithoutTokens)
        }
    }))
}

//----------------------------------------------------------------------------------------------

function groupElements() {
    return createPipeableOperator(subscriber => ({
        next(words) {
            const groupedWords = Object.values(words.reduce((acc, word) => {
                const el = word.toLowerCase()
                const qte = acc[el] ? acc[el].qte + 1 : 1
                acc[el] = { element: el, qte }
                return acc
            }, {}))
            subscriber.next(groupedWords)
        }
    }))
}

function orderByQte(attr, order = 'asc') {
    return function (array) {
        const asc = (o1, o2) => o1[attr] - o2[attr]
        const desc = (o1, o2) => o2[attr] - o1[attr]
        return array.sort(order === 'asc' ? asc : desc)
    }
}

//Operador pipeable que retorna um observable
function createPipeableOperator(operatorFn) {
    return function (source) {
        return Observable.create(subscriber => {
            const sub = operatorFn(subscriber)
            source.subscribe({
                next: sub.next,
                error: sub.error || (e => subscriber.error(e)),
                complete: sub.complete || (e => subscriber.complete(e))
            })
        })
    }
}


//------------------------------------------------------------------------------------------------------------------------------

module.exports = {
    readDirectoryAsync,
    filterFilesByExtension,
    readFileByPathAsync,
    separateBy,
    removeBlankLines,
    removeLinesEndingWithTimeInterval,
    removeOnlyNumbers,
    removeTokens,
    mergeContents,
    groupElements,
    orderByQte,
    getDateNow
}

