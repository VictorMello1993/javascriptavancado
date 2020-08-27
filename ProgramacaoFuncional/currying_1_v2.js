// Exemplo 2 (versão 2)
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

// Criando versões intermediárias das funções utilizando currying (composição)
const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome inválido')

const p1 = {nome: 'A', preco: 14.99, desc: 0.25}
forcarNomeProdutoValido(p1.nome)
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------