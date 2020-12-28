const { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION, SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const morseKey = {
    A: '.-',
    B: '-...',
    C: '-.-.',
    D: '-..',
    E: '.', 
    F: '..-.',
    G: '--.',
    H: '....',
    I: '..',
    J: '.---',
    K: '-.-',
    L: '.-..',
    M: '--',
    N: '-.',
    O: '---',
    P: '.--.',
    Q: '--.-',
    R: '.-.',
    S: '...',
    T: '-',
    U: '..-',
    V: '...-',
    W: '.--',
    X: '-..-',
    Y: '-.--',
    Z: '--..',
    '_': '..--',
    '.': '---.',
    ',': '.-.-',
    '?': '----'
};

const letterForMorseChar = (char) => {
    const filteredChars = Object.keys(morseKey).filter(k => morseKey[k] === char);
    if (filteredChars.length > 0) {
        return filteredChars[0];
    }
}

rl.on('line', (line) => {
    let numberString = '';
    let morseCode = '';

    for (const char of line) {
        morseCode += morseKey[char];
        numberString += morseKey[char].length.toString();
    }

    let decodedString = '';
    let startI = 0;
    for (let i = numberString.length - 1; i >= 0; i--) {
        const length = parseInt(numberString[i], 10);
        const code = morseCode.slice(startI, startI + length);
        const char = letterForMorseChar(code);

        decodedString += char;
        startI += length;
    }

    console.log(decodedString);
});