const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let n;
const samples = [];

rl.on('line', (line) => {
    if (!n) {
        n = line;
        return;
    }

    const [ r, e, c ] = line.split(' ');
    samples.push({ r, e, c });

    if (samples.length == n) {
        for (const s of samples) {
            if (s.r > (s.e - s.c)) {
                console.log('do not advertise');
            } else if (s.r == (s.e - s.c)) {
                console.log('does not matter');
            } else {
                console.log('advertise');
            }
        }   
    }
});