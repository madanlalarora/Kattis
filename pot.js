const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let N;
const numbers = [];

rl.on('line', (line) => {
    if (!N) {
        N = line;
        return;
    }

    numbers.push({
        n: line.slice(0, line.length - 1),
        p: line.slice(line.length - 1, line.length)
    });

    if (numbers.length == N) {
        let sum = 0;
        for (const num of numbers) {
            sum = sum + Math.pow(num.n, num.p);
        }

        console.log(sum);
    }
});