/* Imutabilidade é o conceito da programação funcional no qual as funções só trabalham com valores imutáveis, ou seja, funções que não geram
efeitos colaterais no lado de fora pois o valor original é sempre constante. Exemplo, funções map, filter, reduce, slice são funções que 
trabalham com imutabilidade, pois o array original nunca é alterado. De alguma forma, essas funções acabam sendo funções puras, pois os valores
de entrada são constantes*/

const nums1 = [3, 1, 7, 9, 4, 6]

function ordernar1(array){
    array.sort()
}

ordernar1(nums1)

console.log(nums1) /*Array "nums" foi modificado. Logo, o método 'ordernar' não respeita os princípios da programação funcional, pois a função sort()
                    altera o array original para orderná-lo. Para corrigir esse problema, basta clonar array utilizando operador ... (spread), 
                    conforme o exemplo abaixo.*/


const nums2 = [3, 1, 7, 9, 4, 6]                    

function ordernar2(array){
    return [...array].sort() //Utilizando spread para clonar arrays
}

const numsOrdenados = ordernar2(nums2)
console.log(nums2, numsOrdenados) //"nums2" continua sendo o mesmo array de antes

//Outra forma de tornar os dados de um array imutáveis: Object.freeze()
const nums3 = Object.freeze([3, 1, 7, 9, 4, 6])

// const numsOrdernados2 = ordernar1(nums3) //Erro! ordernar1() está permitindo a mutabilidade de arrays que tiveram seus valores congelados pelo Object.freeze()
// console.log(nums3, numsOrdernados2)

const numsOrdernados2 = ordernar2(nums3)
console.log(nums3, numsOrdernados2)

//Utilizando slice para trabalhar com imutabilidade
const partNums = nums2.slice(2)
console.log(partNums, nums2) //nums2 continua sendo o array de antes
                    




