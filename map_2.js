// Implementação da função map

Array.prototype.meuMap = function(fn){
    let novo = []
    for (let i = 0; i < this.length; i++){
        novo.push(fn(this[i], i, this))
    }
    return novo
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const dobro = elemento => elemento * 2

console.log(nums.meuMap(dobro))
