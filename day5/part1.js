var fs = require('fs'),
    readline = require('readline'),
    niceStrings = 0,
    input = fs.createReadStream('./day5/input.txt');

const rl = readline.createInterface({
    input: input,
    output: process.stdout
});

rl.on('line', (input) => {

    let vowels = checkForVowels(input),
        doubleLetters = checkForDoubleLetters(input),
        bannedStrings = checkForBannedStrings(input);
    if (vowels && doubleLetters && bannedStrings) {
        niceStrings++;
    }
});

rl.on('close', () => {
    console.log(niceStrings);
});

function checkForVowels(input) {

    let vowelCount = 0;
    for (let x of input) {
        for (let y of 'aeiou') {
            if (x === y) {
                vowelCount++;
            }
        }
    }
    return vowelCount >= 3;
}

function checkForDoubleLetters(input) {

    for (let i = 0; i < input.length; i++) {
        if (input.substr(i, 1) === input.substr(i + 1, 1)) {
            return true;
        }
    }
    return false;
}

function checkForBannedStrings(input) {
    let bannedStrings = ['ab', 'cd', 'pq', 'xy'];

    for (let i = 0; i < input.length; i++) {

        for (let b in bannedStrings) {
            if (input.substr(i, 2) === bannedStrings[b]) {
                return false;
            }
        }

    }
    return true;
}