// Mais exemplos de funções puras ou impuras

function getRandomNumber(min, max){
    const fator = max - min + 1
    return parseInt(Math.random() * fator) + min
}

console.log(getRandomNumber(5, 1000))
console.log(getRandomNumber(5, 1000))
console.log(getRandomNumber(5, 1000))
console.log(getRandomNumber(5, 1000))
console.log(getRandomNumber(5, 1000))
console.log(getRandomNumber(5, 1000))
console.log(getRandomNumber(5, 1000))
console.log(getRandomNumber(5, 1000))

/*Neste caso, a função getRandomNumber continua sendo função impura. Neste caso, ela está dependendo da aleatoriedade gerada internamente
por um temporizador na função Math.random()*/