/*Closure é quando uma função "lembra" seu escopo léxico, ou seja, local físico onde a mesma foi definida no código,
seja dentro de uma outra função, módulo (arquivo), classes, etc... mesmo que seja executada fora desse escopo léxico*/

const x = 3

function fora(){
    const x = 97
    function somarXMais3(){
        return x + 3
    }
    return somarXMais3
}

module.exports = fora()