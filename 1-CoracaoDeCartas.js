/*
  O coração das cartas, como Marcos apelidou o jogo, é individual e jogado com três pilhas, 
  inicialmente com o mesmo número de cartas. Cada carta tem um valor numérico inteiro de 0 até 9. 

  O jogador pode, a qualquer momento ver o valor de qualquer carta, mas só pode jogar com as 
  cartas que estão no topo das pilhas. Em cada rodada, o jogador pode remover qualquer combinação 
  de cartas que estejam no topo da pilha (pode escolher 1, 2 ou até 3 cartas) cuja soma dos valores 
  seja múltiplo de 3. 
  
  O jogo é ganho quando todas as cartas forem removidas das pilhas. 
  Se alguma carta não puder ser removida, perde-se o jogo.

  Entrada
  A entrada é composta por várias instâncias Cada instância é iniciada por um inteiro N (0 ≤ N ≤ 100), 
  que identifica o número de cartas em cada pilha. 
  
  A entrada termina quando N = 0. Cada uma das N linhas seguintes contém três inteiros A, B e C, 
  que descrevem os valores numéricos das cartas em um nível da pilha (0 ≤ A, B, C ≤  9). 
  As pilhas são descritas do topo até o fundo.

  Saída
  Para cada instância, imprima uma linha contendo o número 1 se o jogador pode ganhar a instância do jogo 
  ou o número 0 se o jogo for impossível.
*/

let mapa, cards;
let nLinhas = 1;

while (true) {
  nLinhas = parseInt(gets());

  if (nLinhas <= 0) break; //Flag de parada

  mapa = new Map();

  cards = Array.from(new Array(3)).map(v => new Array(nLinhas));

  for (let i = 0; i < nLinhas; i++) {
    [cards[0][i], cards[1][i], cards[2][i]] = 
    gets().
    match(new RegExp(/\d+/, 'g')).
    map(v => parseInt(v));
  }

  console.log(canWinWith(0, 0, 0) ? 1 : 0);
}

function canWinWith(a, b, c) {
  let s = '';

  s = s.concat(a + '0');
  s = s.concat(b + '0');
  s = s.concat(c + '0');

  if (a === b && b === c && c === nLinhas) {
    mapa.set(s, 1);
    return true;
  }

  let x = mapa.get(s);

  if (x > 0) {
    return x === 1 ? true : false;
  }

  if (a < nLinhas && cards[0][a] % 3 === 0 && canWinWith(a + 1, b, c)) {
    mapa.set(s, 1);
    return true;
  }

  if (b < nLinhas && cards[1][b] % 3 === 0 && canWinWith(a, b + 1, c)) {
    mapa.set(s, 1);
    return true;
  }

  if (c < nLinhas && cards[2][c] % 3 === 0 && canWinWith(a, b, c + 1)) {
    mapa.set(s, 1);
    return true;
  }

  if (a < nLinhas && b < nLinhas && (cards[0][a] + cards[1][b]) % 3 == 0 && canWinWith(a + 1, b + 1, c)) {
    mapa[s] = 1;
    return true;
  }

  if (a < nLinhas && c < nLinhas && (cards[0][a] + cards[2][c]) % 3 == 0 && canWinWith(a + 1, b, c + 1)) {
    mapa.set(s, 1);
    return true;
  }
  
  if (b < nLinhas && c < nLinhas && (cards[1][b] + cards[2][c]) % 3 == 0 && canWinWith(a, b + 1, c + 1)) {
    mapa.set(s, 1);
    return true;
  }

  if (a < nLinhas && b < nLinhas && c < nLinhas && (cards[0][a] + cards[1][b] + cards[2][c]) % 3 == 0 && canWinWith(a + 1, b + 1, c + 1)) {
    mapa.set(s, 1);
    return true;
  }

  mapa.set(s, 2);
  return false;
}