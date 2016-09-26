var fs = require('fs'),
    readline = require('readline'),
    niceStrings = 0,
    input = fs.createReadStream('./day5/input.txt');

const rl = readline.createInterface({
    input: input,
    output: process.stdout
});

rl.on('line', (input) => {

    let pairs = checkForPairs(input),
        separatedLetters = checkForSeparatedLetters(input);

    if (pairs && separatedLetters) {
        niceStrings++;
    }
});

rl.on('close', () => {
    console.log(niceStrings);
});

function checkForPairs(input) {

    for (let i = 0; i < input.length - 1; i++) {
        var pair = input.substr(i, 2);
        if (occurences(input, pair) > 1) {
            return true;
        }
    }
    return false;
}

function checkForSeparatedLetters(input) {

    for (let i = 0; i < input.length - 2; i++) {
        let first = input.substr(i, 1),
            second = input.substr(i + 2, 1);
        if (first === second) {
            return true;
        }
    }
    return false;
}

function occurences(str, substr) {
    let occurrences = 0,
        pos = 0;

    while (1) {
        pos = str.indexOf(substr, pos);
        if (pos >= 0) {
            occurrences++;
            pos += 2;
            continue;
        }
        break;
    }
    return occurrences;
}