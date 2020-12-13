const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    const [R1, S] = line.split(' ');

    const R2 = (2 * S) - R1;
    console.log(R2);
});