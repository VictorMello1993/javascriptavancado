//Gerando stream de dados como um array completo (simulando observables usando JS puro)

function getElements(array) {
    return {
        start(fn, interval = 1000) {
            let index = 0
            const i = setInterval(() => {
                if (index >= array.length) {
                    clearInterval(i)
                }
                else {
                    fn(array[index])
                    index++
                }
            }, interval)

            return {
                stop() {
                    clearInterval(i)
                }
            }
        }
    }
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const temp1 = getElements(nums)

//Simulando subscriptions
const sub1 = temp1.start(num => {
    console.log(Math.pow(2, num))
})

setTimeout(() => {
    sub1.stop()
}, 4000)

//Stream de dados => Cada elemento representa um dado completo gerado sequencialmente
getElements([['Victor', 'Camilla', 'Vanderson'],
             ['Daniel', 'Bruno', 'Juliana'],
             [1, 2, 3, 4, 5]]).start(console.log)