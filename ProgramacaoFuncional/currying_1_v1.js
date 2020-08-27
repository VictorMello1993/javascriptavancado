// Exemplo 1 de currying

// Função sem currying
function addWithoutCurrying(a, b, c){
    return a + b + c
}
console.log(addWithoutCurrying(3, 6, 9))

// Função com currying
function addWithCurrying(a){
    return function(b){
        return function(c){
            return a + b + c
        }
    }
}
console.log(addWithCurrying(3)(6)(9))
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Exemplo 2 (versão 1)
function textoComTamanhoEntre(min, max, erro, texto){
    const tamanho = (texto || '').trim().length;
    
    if(tamanho < min || tamanho > max){
        throw erro
    }
}

const p1 = {nome: 'A', preco: 14.99, desc: 0.25}
textoComTamanhoEntre(4, 255, 'Nome inválido!', p1.nome)
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
