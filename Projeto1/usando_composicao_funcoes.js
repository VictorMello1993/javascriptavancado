/*Desafio, reaproveitar o projeto 1 para utilizar a composição de funções
no lugar das chamadas convencionais da promises*/

const fn = require('./funcoes')
const pth = require('path')

const path = pth.join(__dirname, '..', 'dados', 'legendas')

const tokens = ['?', '_', '""', ',', '@', '<i>', '</i>',
    '\r', '[', ']', '(', ')', '.', '♪', '-']

const mostUsedWords = fn.composite(fn.readDirectoryAsync,
    fn.filterFilesByExtension('.srt'),
    fn.readFilesByPathAsync,
    fn.mergeContents,
    fn.separateBy('\n'),
    fn.removeBlankLines,
    fn.removeLinesEndingWithTimeInterval('-->'),
    fn.removeOnlyNumbers,
    fn.removeTokens(tokens),
    fn.mergeContents,
    fn.separateBy(' '),
    fn.removeBlankLines,
    fn.groupElements,
    fn.orderByQte('qte', 'desc'))


mostUsedWords(path)
    .then(console.log)
    .catch(error => console.log(`Erro: ${error}`))

