var fs = require('fs'),
    readline = require('readline'),
    ribbon,
    input = fs.createReadStream('./day2/part1_input.txt'),
    paper = ribbon = 0;

const rl = readline.createInterface({
    input: input,
    output: process.stdout
});


rl.on('line', (input) => {
    let splitDimensions = input.split('x');
    paper += calculateRequiredPaper(splitDimensions);
    calculateRibbonLength(splitDimensions);
});

rl.on('close', () => {
    console.log(paper);
    console.log(ribbon);
});

function calculateRibbonLength(dimensions) {
    let perimeter = removeLargest(dimensions[0], dimensions[1], dimensions[2]);
        ribbon += perimeter[0]*2 + perimeter[1]*2 + (dimensions[0] * dimensions[1] * dimensions[2] );
}

function calculateRequiredPaper(dimensions) {
    let sides = [2 * (dimensions[0] * dimensions[1] ), 2 * (dimensions[1] * dimensions[2]), 2 * (dimensions[0] * dimensions[2] )],
        totalArea = sides[0] + sides[1] + sides[2],
        smallestSide = smallest(sides[0], sides[1], sides[2]) / 2;
    return totalArea + smallestSide;
}

function smallest(a, b, c) {
    return a < b ? ( a < c ? a : c ) : ( b < c ? b : c );
}

function removeLargest(a_, b_, c_) {
    let a = parseInt(a_),
        b = parseInt(b_),
        c = parseInt(c_);
    return a > b ? ( a > c ? [b, c] : [a, b] ) : ( b > c ? [a, c] : [a, b] );
}