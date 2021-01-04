const fn = require('./funcoes')
const pth = require('path')
const {toArray, map} = require('rxjs/operators')
const _ = require('lodash')

const path = pth.join(__dirname, '..', 'dados', 'legendas')

const tokens = ['?', '_', '""', ',', '@', '<i>', '</i>',
    '\r', '[', ']', '(', ')', '.', '♪', '-', '!']

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




