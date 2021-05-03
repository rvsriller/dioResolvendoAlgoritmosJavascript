/*
  Entrada
  Haverá diversos casos de teste. Cada caso de teste é composto de uma linha, contendo uma frase de até 10⁴ caracteres. 
  A frase é composta de palavras e espaços em branco, e cada palavra é composta de letras minúsculas ('a'-'z'), 
  e contém entre 1 e 30 caracteres cada.

  O último caso de teste é indicado quando a linha dada conter apenas um “.”, o qual não deverá ser processado.

  Saída
  Para cada caso de teste, imprima uma linha contendo a frase já com as abreviações escolhidas e aplicadas.
  Em seguida, imprima um inteiro N, indicando o número de palavras em que foram escolhidas uma letra para a abreviação no texto. Nas próximas N linhas, imprima o seguinte padrão “C. = P”, onde C é a letra inicial e P é a palavra escolhida para tal letra. As linhas devem ser impressas em ordem crescente da letra inicial.
*/

const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const regexPattern = /\b[a-z]{1,30}\b/g

while (true) {
  let newSentence = ''
  const input = gets() 


  if (!input || input === '.') break;

  if (input.length > Math.pow(10, 4)) continue;

  const sentence = input.trim().match(regexPattern)
  const uniqueWords = Array.from(new Set(sentence));

  const words = uniqueWords.map(word => {
    const repeatations = sentence.join(' ').match(new RegExp(`\\b${word}\\b`, 'g')).length;
    const trim = word.length - 2
    const save = trim * repeatations
    const abbreviation = `${word[0]}.`
    const legend = `${abbreviation} = ${word}`
    const regexp = new RegExp(`\\b${word}\\b`, 'g')
    return { word, repeatations, trim, save, abbreviation, legend, regexp }
  }).filter(word => word.save > 0)

  const abbreviations = alphabet.split('').map(letter => {
    candidates = words.filter(word => word.word.match(new RegExp(`\\b${letter}\\w{2,}\\b`, 'g')))
    if (!candidates || candidates === null) return { save: 0 }

    return candidates.reduce((acc, curr) => {
      return curr.save >= acc.save
        ? curr
        : acc

    }, { save: 0 });

  }).filter(el => el.save > 0);

  newSentence = input;
  for (const abbr of abbreviations) {
    newSentence = newSentence.replace(abbr.regexp, abbr.abbreviation);
  }

  //Output
  console.log(newSentence);
  console.log(abbreviations.length);
  abbreviations.sort().map(({ legend }) => console.log(legend));
}