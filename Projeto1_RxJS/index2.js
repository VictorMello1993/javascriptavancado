const fn = require('./funcoes')
const pth = require('path')
const {toArray, map} = require('rxjs/operators')
const _ = require('lodash')

const path = pth.join(__dirname, '..', 'dados', 'legendas')

const tokens = ['?', '_', '""', ',', '@', '<i>', '</i>',
    '\r', '[', ']', '(', ')', '.', '♪', '-', '!']


// fn.readDirectoryAsync(path)
//     .then(fn.filterFilesByExtension('.srt'))
//     .then(fn.readFilesByPathAsync)
//     .then(fn.mergeContents)
//     .then(fn.separateBy('\n'))
//     .then(fn.removeBlankLines)
//     .then(fn.removeLinesEndingWithTimeInterval('-->'))
//     .then(fn.removeOnlyNumbers)
//     .then(fn.removeTokens(tokens))
//     .then(fn.mergeContents)
//     .then(fn.separateBy(' '))
//     .then(fn.removeBlankLines)
//     .then(fn.groupElements)
//     .then(fn.orderByQte('qte', 'desc'))
//     .then(console.log)
//     .catch(error => console.log(`Erro: ${error}`))

fn.readDirectoryAsync(path)
    .pipe(
        fn.filterFilesByExtension('.srt'),
        fn.readFileByPathAsync(),        
        fn.separateBy('\n'),
        fn.removeBlankLines(),
        fn.removeOnlyNumbers(),
        fn.removeTokens(tokens),
        fn.separateBy(' '),
        fn.removeBlankLines(),        
        toArray(), //Convertendo streaming de dados em um único array
        fn.groupElements(),
        map(array => _.sortBy(array, el => el.qte))        
    )
    .subscribe(console.log)    




