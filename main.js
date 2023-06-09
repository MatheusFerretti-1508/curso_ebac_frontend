const alunos = ["Alexios", "Kassandra", "Matheus", "Juliana"] /*Criando alunos*/
const alunosComoObjetos = alunos.map(function(itemAtual) { /*Tornando objetos*/
    itemAtual = {
        nome: itemAtual,
        nota: 0
    }
    return itemAtual
})
alunosComoObjetos.forEach(function(nomeItem, posicao) { /*Adicionando notas*/
    nomeItem.nota = 4 + posicao
})

const retornaAprovados = () => {                        /*Função verificadora de média*/
    alunosComoObjetos.forEach(function(nomeItem, posicao) {
        if (nomeItem.nota >= 6) {
            console.log(`O(A) aluno(a): ${nomeItem.nome} está aprovado`)
        } else {
            console.log(`O(A) aluno(a): ${nomeItem.nome} está reprovado`)
        }
    })
}

console.log(retornaAprovados()) /*Informando o console*/