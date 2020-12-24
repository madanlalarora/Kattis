const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    isHarshadNumber(parseInt(line));
});


function isHarshadNumber(number) {
    const nums = number.toString().split('');

    let sum = 0;
    for (const n of nums) {
        sum += parseInt(n);
    }
    
    if (number % sum === 0) {
        console.log(number);
        return;
    }

    return isHarshadNumber(number + 1);
}