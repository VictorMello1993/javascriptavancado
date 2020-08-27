// Exemplo 2 (versão 3)
function textoComTamanhoEntre(min){
    return function(max){
        return function(erro){
            return function(texto){
                // Lazy evaluation
                const tamanho = (texto || '').trim().length;
            
                if(tamanho < min || tamanho > max){
                    throw erro
                }                
            }
        }
    }
}

// Função que compõe tratamento de exceções com currying
function aplicarValidacao(fn){
    return function(valor){
        try {
            fn(valor)
        } catch (e) {
            return {error: e}
        }
    }
}

// Criando versões intermediárias das funções utilizando currying (composição)
const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome inválido')
const validarNomeProduto = aplicarValidacao(forcarNomeProdutoValido)

const p1 = {nome: 'A', preco: 14.99, desc: 0.25}
console.log(validarNomeProduto(p1.nome))
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------