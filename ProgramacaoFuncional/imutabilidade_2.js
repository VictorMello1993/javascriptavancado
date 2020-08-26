const nums = [4, 8, 3, 2, 9, 1, 9, 3]


//1 - Usando dados mutáveis
// let total = 0
// for (let i = 0; i < nums.length; i++) {
//     total += nums[i]        
// }

// console.log(total)


//2 - Usando dados imutáveis - Reduce
// const somar = (a, b) => a + b
// console.log(nums.reduce(somar))

//3 - Usando dados imutáveis - Recursividade
function somarArray(array, total = 0){
    if(array.length === 0) return total
    return somarArray(array.slice(1), total + array[0])
}

const totalRecursivo = somarArray(nums)
console.log(totalRecursivo)
