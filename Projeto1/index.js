const fn = require('./funcoes')
const pth = require('path');

const path = pth.join(__dirname, '..', 'dados', 'legendas')

fn.readDirectoryAsync(path)
    .then(filesPath => fn.filterFilesByExtension(filesPath, '.srt'))
    .then(filesSRTPath => fn.readFilesByPathAsync(filesSRTPath))
    .then(contents => fn.splitFilesInLines(contents))
    .then(lines => fn.removeBlankLines(lines))
    .then(lines => fn.removeLinesEndingWithTimeInterval(lines, '-->'))
    .then(lines => fn.removeOnlyNumbers(lines))
    .then(console.log)
    .catch(error => console.log(`Erro: ${error}`))




