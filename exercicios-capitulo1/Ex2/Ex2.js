const valorComanda = Number(prompt('Qual é o valor da comanda? '));
const quantPessoas = Number(prompt('Quantas pessoas vão dividir? '));

const valorDiv = valorComanda / quantPessoas;

alert(`O valor por pessoa ficará: ${valorDiv.toFixed(2)}`);