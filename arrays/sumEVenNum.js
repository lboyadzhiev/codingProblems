'use strict';

/*
Write a program which receives an array of strings, parse them to numbers and sum only the even numbers.
*/

function sumEven(input) {
    return input
        .map((x) => Number(x))
        .filter((x) => x % 2 === 0)
        .reduce((a, b) => a + b, 0);
}

console.log(sumEven(['2', '4', '6', '8', '10']));
