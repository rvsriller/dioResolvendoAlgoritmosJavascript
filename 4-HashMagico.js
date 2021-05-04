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

}