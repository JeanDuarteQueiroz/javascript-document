const valorProd = parseInt(prompt('Insira o valor do produto: '));

const valorAvista = valorProd - (valorProd * 0.10);
const valorAprazo = valorProd / 3;

alert(`A Vista ficará ${valorAvista.toFixed(2)}\nA Prazo ficará 3x de ${valorAprazo.toFixed(2)}`);