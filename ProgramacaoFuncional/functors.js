// Functors são objetos que implementam a função map, que também é um wrapper de um valor, ou seja, objetos que encapsulam um valor

// Exemplo: array é um exemplo de uma functor
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const novosNums = nums
    .map(el => el + 10)
    .map(el => el * 2)

console.log(nums, novosNums)

//Exemplo 2:
function TipoSeguro(valor){
    return {
        valor,
        invalido(){
            return this.valor === null || this.valor === undefined
        },
        map(fn){
            if(this.invalido()){
                return TipoSeguro(null)
            } else {
                const novoValor = fn(this.valor)
                return TipoSeguro(novoValor)
            }
        }
    }
}

const valorOriginal = 'Esse é um texto'
const novoValor = TipoSeguro(valorOriginal)
                    .map(t => t.toUpperCase())
                    .map(t => `${t}!!!!!!`)
                    .map(t => t.split('').join(' '))
                    
console.log(valorOriginal, novoValor.valor)

// Detalhe importante: a função map() já retorna um novo objeto de MESMO TIPO, com valores transformados.




