const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let N;
const lines = [];

rl.on('line', (line) => {
    if (!N) {
        N = parseInt(line);
        return;
    }

    lines.push(line);

    if (lines.length === N) {
        for (const l of lines) {
            if (l.indexOf('P') > -1) {
                console.log('skipped');
                continue;
            }

            const [a, b] = l.split('+');
            console.log((parseInt(a) + parseInt(b)));
        }
    }
});