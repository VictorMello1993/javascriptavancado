const pessoa = {
    nome: 'Victor',
    altura: 1.80,
    cidade: 'Rio de Janeiro',
    end: Object.freeze({
        rua: 'ABC'
    })
}

// Atribuição por referência (cópia de referências de objetos)
// const novaPessoa = pessoa

// console.log(novaPessoa) //O objeto original sofreu alterações, pois a sua referência dela foi copiada para outros objetos


//Passagem por referência
function alteraPessoa(pessoa){
    const novaPessoa = {...pessoa} //Usando spread para clonar objetos, deixando os atributos do objeto original passado como parâmetro imutáveis
    novaPessoa.nome = 'Camilla'
    novaPessoa.cidade = 'São Paulo'    
    novaPessoa.end.rua = 'XPTO'
    return novaPessoa
}

const novaPessoa = alteraPessoa(pessoa)
console.log(pessoa, novaPessoa)


/* OBS: é preciso tomar cuidado com objetos aninhados, pois JavaScript nativamente não possui cópia profunda de objetos. Apena copia o primeiro
nível de atributos. Existem bibliotecas capazes de realizar cópias profundas como loadash, por exemplo. Na linha acima, todas as referências
de objeto "end" do objeto "pessoa" foram modificadas também no objeto original, pois houve uma cópia parcial de objetos. Para resolver esse
problema sem utilizar biblioteca de terceiros, basta utilizar Object.freeze para o objeto aninhado.*/

