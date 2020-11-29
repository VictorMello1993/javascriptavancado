/*Desafio: procurar na documentação do Rxjs um operador de criação que
permita gerar um observer que faça a seguinte tarefa:

- esperar 3000ms (delay inicial)
- gerar números de 500 em 500ms
- depois de 10000ms, chamar unsubscribe*/


// Resposta: operador timer
const {timer, Subscription} = require('rxjs')

// const sub = new Subscription()

const obs = timer(3000, 500)

const sub1 =  obs.subscribe(value => console.log(`#1 Gerou o número ${value}`))
const sub2 =  obs.subscribe(value => console.log(`#2 Gerou o número ${value}`))

//Centralizando os subscriptions em um único subscription
// sub.add(sub1)
// sub.add(sub2)

// setTimeout(() => sub.unsubscribe(), 5000)

sub1.add(sub2) //Sub2 será o filho do sub1
//Desativando o subscription pai também irá desativar os subscription filhos
setTimeout(() => sub1.unsubscribe(), 5000)
