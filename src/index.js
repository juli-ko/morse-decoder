const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let exprOneLetter = [];
  for (let i = 0; i < expr.length; i += 10) {
    exprOneLetter.push(expr.slice(i, i + 10));
  }
  let exprInMorse = exprOneLetter.map((element) => {
    let newElement = "";
    for (let i = 0; i < element.length; i += 2) {
      if (element.slice(i, i + 2) === "10") {
        newElement += ".";
      }
      if (element.slice(i, i + 2) === "11") {
        newElement += "-";
      }
    }
    return newElement === "" ? " " : MORSE_TABLE[newElement];
  });

  return exprInMorse.join("");
}


module.exports = {
    decode
}