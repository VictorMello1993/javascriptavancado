const {from, asyncScheduler} = require('rxjs')
const {observeOn} = require('rxjs/operators')

/*A execução em observables, por padrão, é feita de forma síncrona. Porém, é possível tornar esse processamento assíncrono, por meio
do scheduler*/

//Forma síncrona (normal)
// console.log('Antes...')

// from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).subscribe(console.log)

// console.log('Depois...')


//Forma assíncrona
console.log('Antes...')

from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    .pipe(observeOn(asyncScheduler))
    .subscribe(console.log)

console.log('Depois...')