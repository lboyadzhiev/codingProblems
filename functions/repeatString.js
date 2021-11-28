/*
    1. Repeat String
Write a function that receives a string and a repeat count n. The function should return a new string (the old one repeated n times).
*/

function repeat(string, num) {
    let str = '';

    for (let i = 0; i < num; i++) {
        str += string;
    }

    return str;
}

console.log(repeat('abv', 3));
