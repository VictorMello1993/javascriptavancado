const { of, Observable, from } = require('rxjs')


// function createPipeableOperator(nextFn) {
//     return function(source){
//         return Observable.create(subscriber => {
//             source.subscribe({
//                 // next(value){
//                 //     nextFn(subscriber, value)
//                 // }

//                 next: nextFn(subscriber)
//             })
//         })
//     }
// }

//Encapsulando a criação de um pipeable operator que já contém o next(), complete() e error()
function createPipeableOperator(operatorFn) {
    return function (source) {
        return Observable.create(subscriber => {
            //Versão 1
            // source.subscribe(operatorFn(subscriber)) 

            //Versão2
            const sub = operatorFn(subscriber)
            source.subscribe({
                next: sub.next,
                error: sub.error || (e => subscriber.error(e)),
                complete: sub.complete || (e => subscriber.complete(e))
            })
        })
    }
}

// function firstElement(){
//     return createPipeableOperator((subscriber, value) => {
//         subscriber.next(value)
//         subscriber.complete()
//     })
// }

//Usando currying (funções que retornam funções como resposta de outras funções)
// function firstElement(){
//     return createPipeableOperator(function(subscriber){
//         return function(value){
//             subscriber.next(value);
//             subscriber.complete();
//         }
//     })
// }

//Operador que já retorna um objeto com funções next(), complete() e error()
function firstElement() {
    return createPipeableOperator(subscriber => {
        return {
            next(value) {
                subscriber.next(value);
                subscriber.complete();
            }
        }
    })
}

//Versão 1 do None()
// function None(){
//     return function(source){
//         return Observable.create(subscriber => {
//             source.subscribe({
//                 next(v){                    
//                     subscriber.complete()
//                 }
//             })
//         })
//     }
// }

//Operador que já retorna um objeto com funções next(), complete() e error() - Versão 2 do None()
function None() {
    return createPipeableOperator(subscriber => {
        return {
            next(value) {
                console.log('Nenhum')
                subscriber.complete();
            }
        }
    })
}

// //Versão 1 do LastElement()
// function lastElement() {
//     return function(source){
//         return Observable.create(subscriber => {
//             let last
//             source.subscribe({
//                 next(value) {
//                     last = value                    
//                 },
//                 complete() {
//                     if(last !== undefined){
//                         subscriber.next(last)
//                     }
//                     subscriber.complete()
//                 }
//             })
//         })
//     }
// }    

//Operador que já retorna um objeto com funções next(), complete() e error() - Versão 2 do LastElement()
function lastElement() {
    let last
    return createPipeableOperator(subscriber => {
        return {
            next(value) {
                last = value                    
            },
            complete() {
                if(last !== undefined){
                    subscriber.next(last)
                }
                subscriber.complete()
            }
        }
    })    
}    


from([1, 2, 3, 4, 5])
    .pipe(firstElement(), None(), lastElement())
    .subscribe(console.log)