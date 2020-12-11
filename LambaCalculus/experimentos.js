// Lambda calculus

let r 

//Função identidade: função a qual recebe parâmetro e o resultado é o próprio parâmetro
const I = a => a 

r = I(3)
r

r = I(I)
r

const self = f => f(f)

r = self(I)
r

//Retornando apenas o primeiro parâmetro
const primeiro = a => _ => a

r = primeiro(7)(1)
r

//Retornando apenas o último parâmetro
const ultimo = _ => b => b
r = ultimo(4)(10)
r


