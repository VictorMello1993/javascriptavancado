// Funções de callback

const somarNoTerminal = (num1, num2) => console.log(num1 + num2)
const subtrairNoTerminal = (num1, num2) => console.log(num1 - num2)

const exec = (fn, num1, num2) => fn(num1, num2)

exec(somarNoTerminal, 10, 20)
exec(subtrairNoTerminal, 40, 20)

// Exemplo: uso de temporizadores
const callback = () => console.log('Carregando...')
setInterval(callback, 1000)

//Ou

setInterval(() => console.log('Carregando...'), 1000)

//Usando funções tradicionais
setInterval(function(){
    console.log('Carregando...')
}, 5000)