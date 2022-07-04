const alunos = ['João', 'Juliana', 'Caio', 'Ana']
const mediasDosAlunos = [10,7,9,6]

             
let listaDeNotasEAlunos = [alunos, mediasDosAlunos]
   
const exibeNomeNota = (nomeDoAluno) => {
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)){ //include faz uma busca pelo nome
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno) //indexOf vai achar e guardar a posição do nome


        return listaDeNotasEAlunos[0][indice] + ', sua média é ' +
        listaDeNotasEAlunos[1][indice]


        } else {
            return "Aluno não está cadastrado"
        }
    
}

console.log(exibeNomeNota("Nemo"))