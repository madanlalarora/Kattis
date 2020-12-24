const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    const [ X, Y, N ] = line.split(' ');

    for (let i = 1; i <= N; i++) {
        let print = '';

        if (i % X == 0) print = print + 'Fizz';

        if (i % Y == 0) print = print + 'Buzz';

        if (!print) print = i;

        console.log(print);
    }
});