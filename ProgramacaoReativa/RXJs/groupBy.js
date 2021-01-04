//groupBy: responsável por gerar vários streams de dados com base no critério de agrupamento

const { from, of, zip } = require('rxjs')
const { groupBy, mergeMap, toArray} = require('rxjs/operators')


//Exemplo 1
// const obs1 = from([1, 2, 3, 10, 16, 5])
// obs1.pipe(groupBy(num => num % 2),
//     mergeMap(group => group.pipe(toArray())))
//     .subscribe(console.log)

//Exemplo 2 (referência: https://www.learnrxjs.io/learn-rxjs/operators/transformation/groupby)
const people = [
    { name: 'Sue', age: 25 },
    { name: 'Joe', age: 30 },
    { name: 'Frank', age: 25 },
    { name: 'Sarah', age: 35 }
]

const obs1 = from(people)
const obs2 = obs1.pipe(groupBy(person => person.age),
                       mergeMap(group => group.pipe(toArray())))

//Subscription
const subscribe = obs2.subscribe(console.log)

console.log('\n')

//Exemplo 3 - Agrupando pela chave
from(people)
    .pipe(groupBy(person => person.age,
                  p => p.name),
          mergeMap(group => zip(of(group.key), group.pipe(toArray()))))
    .subscribe(console.log)          
