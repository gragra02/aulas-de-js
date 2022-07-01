// declaração de função

function minhaFuncao(param) {
  // bloco de código
}

minhaFuncao("param")

// expressão de função

const soma = function(num1, num2) { return num1 + num2 }
console.log(soma(1, 4))

// diferença principal: HOISTING
// funções e var são "listadas" no topo do arquivo.

console.log(apresentar())

function apresentar() {
  return "olá mundo" ;
}

console.log(somaOutroExemplo(1, 1))
const somaOutroExemplo = function(num1, num2) { return num1 + num2 }


