const fn = require('./funcoes')
const pth = require('path');

const path = pth.join(__dirname, '..', 'dados', 'legendas')

// const files = fn.readDirectory(path)
// console.log(files)

fn.readDirectoryAsync(path)
    .then(console.log)
    .catch(err => console.log(`Erro: ${err}`))




