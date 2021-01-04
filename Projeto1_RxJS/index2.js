//Index.js - Versão 2 (usando group by nativo do RXJs)

const fn = require('./funcoes')
const pth = require('path')
const {toArray, map, groupBy, mergeMap} = require('rxjs/operators')
const _ = require('lodash')

const path = pth.join(__dirname, '..', 'dados', 'legendas')

const tokens = ['?', '_', '""', ',', '@', '<i>', '</i>',
    '\r', '[', ']', '(', ')', '.', '♪', '-', '!']

fn.readDirectory(path)
    .pipe(
        fn.filterFilesByExtension('.srt'),
        fn.readFile(),        
        fn.separateBy('\n'),
        fn.removeBlankLines(),
        fn.removeOnlyNumbers(),
        fn.removeTokens(tokens),
        fn.separateBy(' '),
        fn.removeBlankLines(),          
        groupBy(el => el), //Nativo do RXJs
        mergeMap(group => group.pipe(toArray())),
        map(words => ({element: words[0], qte: words.length})),
        toArray(), //Convertendo streaming de dados em um único array
        map(array => _.sortBy(array, el => -el.qte)),
    )
    .subscribe(console.log)    




