// Gerando stream de dados simulando observables utilizando JS puro

//---------------------------------------------------------------------------------------------------------------------------------------------------
//Versão 1
// function getNumbers(){
//     let num = 0;
//     setInterval(() => {
//         console.log(num++)
//     }, 1000)
// }

// getNumbers()

//---------------------------------------------------------------------------------------------------------------------------------------------------
//Versão 2
// function getNumbers(fn){
//     let num = 0;
//     setInterval(() => {
//         fn(num++)
//     }, 1000)
// }

// getNumbers(number => {
//     console.log(`#1: ${number * 2}`)
// })

// getNumbers(number => {
//     console.log(`#2: ${number + 100}`)
// })

//---------------------------------------------------------------------------------------------------------------------------------------------------
// //Versão 3
// function getNumbers(){
//     return {
//         start(fn, interval = 1000){
//             let num = 0;
//             setInterval(() => {
//                 fn(num++)
//             }, interval)
//         }
//     }
// }

// const temp1 = getNumbers()
// temp1.start(number => {
//     console.log(`#1: ${number * 2}`)
// })

// const temp2 = getNumbers()
// temp2.start(number => {
//     console.log(`#2: ${number + 100}`)
// }, 2000)
//---------------------------------------------------------------------------------------------------------------------------------------------------

//Versão 4
function getNumbers() {
    return {
        start(fn, interval = 1000) {
            let num = 0
            const i = setInterval(() => {
                fn(num++)
            }, interval)

            return {
                stop() {
                    clearInterval(i)
                }
            }
        }
    }
}

//Execução 1 (subscription 1)
const temp1 = getNumbers();
const sub1 = temp1.start((number) => {
    console.log(`#1.1: ${number * 2}`)
}, 1000)

const sub12 = temp1.start((number) => {
    console.log(`#1.2: ${number + 100}`)
}, 500)
//------------------------------------------------------------------------------------------------------------------------------

//Execução 2 (subscription 2)
const temp2 = getNumbers();
const sub2 = temp2.start((number) => {
    console.log(`#2: ${number + 100}`)
}, 2000)
//------------------------------------------------------------------------------------------------------------------------------

//Parando as execuções (subscriptions)
setTimeout(() => {
    sub1.stop()
    sub2.stop()
}, 10000)

setTimeout(() => {
    sub12.stop()
}, 12000)
//---------------------------------------------------------------------------------------------------------------------------------------------------
