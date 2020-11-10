//Desafio: Criar uma função observable que gere números entre o mínimo e o máximo 

const rxjs = require('rxjs');

//MINHA RESOLUÇÃO
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function between(min, max) {
//     return new rxjs.Observable(subscriber => {
//         while (min <= max) {
//             subscriber.next(min)
//             min++
//         }
//         subscriber.complete()
//     })
// }

// between(4, 10).subscribe(console.log)
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//CORREÇÃO
function between(min, max) {
    return new rxjs.Observable(subscriber => {
        Array(max - min + 1).fill().map((_, i) => {
            subscriber.next(min + i)
        })
        subscriber.complete()
    })
}

between(4, 10).subscribe(
    num => console.log(`num = ${num}`),
    rxjs.noop,
    () => console.log('Fim!')
)