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
    // write your solution here
	let result = expr.split('**********').map((word) => {
		const simbols = word.length / 10;
		let encodedMessage = '';
		
		for (let i = 0; i < simbols; i++) {
			let letter = '';
			for (let j = i * 10; j < i * 10 + 10; j += 2) {
				if (word[j] + word[j + 1] === '10') {
					letter += '.';
				} else if (word[j] + word[j + 1] === '11') {
					letter += '-';
				}
			}
			
			encodedMessage += MORSE_TABLE[letter];
			letter = '';
		}
		return encodedMessage;
	}).join(' ');

	return result;
}

module.exports = {
    decode
}