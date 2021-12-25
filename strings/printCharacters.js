/**
 Write a function that receives a string and prints all the characters on separate lines.
*/

function printChar(string) {
    return [...string].join('\n');
}

console.log(printChar('AWord'));
