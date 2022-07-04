
//teste de matriz
// idades = [30, 35, 28]
// nomes = ["Ana", "Juliana", "Leonardo"]
// faculdade = [false, true, true]

// funcionarios = [nomes,idades,faculdade]
// console.log(funcionarios)

// console.log(`${funcionarios[0][1]} tem ${funcionarios[1][2]} anos` )


//Estudando JavaScript
// linha1 = ['A', 'T', 'V']
// linha2 = ['F', 'M', 'P']
// linha3 = ['O', 'N', 'R']
// linha4 = ['D', 'R', 'C']

// precisamos= [linha1, linha2, linha3, linha4]
// console.log(`${precisamos[0][0]} ${precisamos[1][1]} ${precisamos[2][0]} ${precisamos[3][1]}`)


/* 
//function imprimeTexto(nome) {
  return `meu nome é ${nome}`;
  }

  console.log(imprimeTexto("Grazi")) */

const notas1 = [10, 6.5, 8 ,7.5]
const notas2 = [9, 6, 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

let media = 0

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j]/notasGerais[i].length;
  }
}

media = media/notasGerais.length

console.log(media)
  
  

