const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let X, N;
const P = [];

rl.on('line', (line) => {

    if (!X) {
        X = parseInt(line);
        return;
    }

    if (!N) {
        N = parseInt(line);
        return;
    }

    P.push(line);
    
    if (P.length === N) {
        let leftover = X;
        for (const pi of P) {
            leftover += X - pi;
        }

        console.log(leftover);   
    }
});