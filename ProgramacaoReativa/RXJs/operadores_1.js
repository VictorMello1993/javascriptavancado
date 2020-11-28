// Tipos de operadores:
//1) Operadores de criação
const { of, } = require('rxjs')

//2) Operadores encadeáveis (Pipeable Op.)
const { last, first, map } = require('rxjs/operators')

of(1, 2, 'Victor', false, 'último').subscribe(value => {
    console.log(`O valor gerado foi ${value}`)
})

console.log('\n')

of(1, 2, 'Victor', false, 'último')
    .pipe(last()) //Encerra o observable com o complete() apenas para o último elemento da sequência de dados
    .subscribe(value => {
        console.log(`O valor gerado foi ${value}`)
    })

console.log('\n')

of(1, 2, 'Victor', false, 'último')
    .pipe(first()) //Encerra o observable com o complete() apenas para o primeiro elemento da sequência de dados
    .subscribe(value => {
        console.log(`O valor gerado foi ${value}`)
    })

console.log('\n')

// of(1, 2, 'Victor', false, 'último')
//     .pipe(last())
//     .pipe(map(v => v[0]))//Obtendo o primeiro caracter da string que representa o último elemento da sequência de dados    
//     .subscribe(value => {
//         console.log(`O valor gerado foi ${value}`)
//     })

//Ou

of(1, 2, 'Victor', false, 'último')
    .pipe(last(),
        map(v => v[0]) //Obtendo o primeiro caracter da string que representa o último elemento da sequência de dados
    )
    .subscribe(value => {
        console.log(`O valor gerado foi ${value}`)
    })

console.log('\n')

of(1, 2, 'Victor', false, 'último')
    .pipe(last(),
        map(v => v[0]),
        map(v => `A letra encontrada foi: ${v}`),
    )
    .subscribe(value => {
        console.log(value)
    })

