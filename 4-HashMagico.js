const regexLine = /[A-Z]/g
let nCasos = parseInt(gets()); 
let nLinhas = 0;
let valor;
let linhas;

while (nCasos > 0) {
  nCasos--
  linhas = []
  valor = 0
  nLinhas = parseInt(gets())

  if (nLinhas < 1 || nLinhas > 100) {
    for (let i = 0; i < nLinhas; i++) { gets(); } 
    continue;
  }

  for (let i = 0; i < nLinhas; i++) {
    linhas = [...linhas, gets()] 
  }

  for (const [i, line] of linhas.entries()) {
    valor += line.match(regexLine).slice(0, 50).reduce((acc, curr, posicaoElemento, array) => {
      const posicaoAlfabeto = parseInt(curr, 36) - 10;
      const elementoEntrada = i;

      return acc + posicaoAlfabeto + elementoEntrada + posicaoElemento
    }, 0)
  }

 
}