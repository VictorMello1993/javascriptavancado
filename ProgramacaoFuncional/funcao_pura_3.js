let qteExecucoes = 0

// Outro exemplo de função impura
function add(a, b){
    qteExecucoes++
    return a + b
}

console.log(qteExecucoes)
console.log(add(68, 31))
console.log(add(68, 31))
console.log(add(68, 31))
console.log(add(68, 31))
console.log(add(68, 31))
console.log(add(68, 31))
console.log(add(68, 31))
console.log(add(68, 31))
console.log(qteExecucoes)


/* OBS: Na maioria dos casos, sempre priorizar no uso de funções puras, com exceções de casos em que não tem como controlar
tudo o que foi retornado na função, o que acaba tendo que recorrer a funções impuras. Exemplo, casos como gerar valores aleatórios,
acesso a banco de dados (o fator externo, no caso, seria as operações que são feitas no banco como inserção, alteração, exclusão,
consulta, etc), leitura de um arquivo (podem ocorrer situações em que mesmo que passe o caminho correto para um arquivo como
parâmetro de entrada, eventualmente pode ser que o conteúdo de um arquivo seja alterado ou até mesmo o próprio arquivo ser excluído,
gerando efeitos colaterais observáveis)*/