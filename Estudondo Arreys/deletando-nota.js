const notas = [10, 7, 8, 5, 10]
notas.pop()

//O "pop" vai remover a nota 10 a lista"
//Ficando const notas = [10, 7, 8, 5]
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3] ) /notas.length

console.log(`A sua media é ${media}`)