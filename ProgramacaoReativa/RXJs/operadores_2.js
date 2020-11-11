const {interval, from} = require('rxjs')
const {map, concatAll} = require('rxjs/operators')
const {ajax} = require('rxjs/ajax')
const {XMLHttpRequest} = require('xmlhttprequest')

// from([1, 2, 3]).subscribe(console.log)

// console.log('\n')

// interval(1000)
//     .pipe(
//         map(_ => [1, 2, 3]), //Neste caso irá gerar um array completo sequencialmente. Mas se usar from() passando um array como parâmetro ou concatAll() depois do map(), irá gerar elementos separados do array sequencialmente
//         concatAll()
//     )
// .subscribe(console.log)


//Exemplo: buscando todos os repositórios do GitHub através de um observable que cria requisição ajax
ajax({
    createXHR: () => new XMLHttpRequest(),
    url: 'https://api.github.com/users/VictorMello1993/repos'
})
.pipe(    
    map(resp => JSON.parse(resp.xhr.responseText)),
    concatAll(),
    map(repo => repo.full_name)
).subscribe(console.log)