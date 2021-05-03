/*
  Crie um algoritmo que receba dois inputs que sejam strings e combine-as alternando as letras de cada string. 
  Deve começar pela primeira letra da primeira string, seguido pela primeira letra da segunda string, em seguida 
  pela segunda letra da primeira string e continuar dessa forma sucessivamente.

  As letras restantes da cadeia mais longa devem ser adicionadas ao fim da string resultante e retornada.
 
  A entrada contém vários casos de teste. A primeira linha contém um inteiro N que indica a quantidade de 
  casos de teste que vem a seguir. Cada caso de teste é composto por uma linha que contém duas cadeias de caracteres, 
  cada cadeia de caracteres contém entre 1 e 50 caracteres inclusive.
 
*/

const nCases = parseInt(gets()); //Extrai a primeira entrada contendo o número de casos a serem processados
let saida; //Variável de saída

for (let i = 1; i <= nCases; i++) { //Laço de repetição para percorrer as strings de cada caso
  saida = '';
  [strA, strB] = gets().split(' ');  //Extrai as duas cadeias de caracteres
  
  const menorTamanho = Math.min(strA.length, strB.length) //Retorna o menor valor comparado (a menor string)

  for (let j = 0; j < menorTamanho; j++) saida += `${strA[j]}${strB[j]}`; //Combinação de letras de cada string

  saida += strA.length > strB.length ? strA.substring(menorTamanho) : strB.substring(menorTamanho)  //Ordenando por menor tamanho

  console.log(saida); //Saída de cada caso
}