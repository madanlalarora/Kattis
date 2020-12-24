const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    const [ n, h, v ] = line.split(' ');

    const horizontalCut = ((n - h) > h ? (n - h) : h);
    const verticalCut = ((n - v) > v ? (n - v) : v);
    
    console.log(`${horizontalCut * verticalCut * 4}`);
});