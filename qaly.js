const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let N;
const periods = [];

rl.on('line', (line) => {
    if (!N) {
        N = parseInt(line, 10);
        return;
    }

    const nums = line.split(' ');
    periods.push({
        q: parseFloat(nums[0]),
        y: parseFloat(nums[1])
    });

    if (periods.length === N) {
        let sum = 0;
        for(const p of periods) {
            sum = sum + (p.q * p.y);
        }

        console.log(sum);
    }
});