/*
Write a function that receives an array of strings and prints the sum of first and last element in that array.
*/

function sum(array) {
    let first = Number(array.shift());
    let last = Number(array.pop());

    return first + last;
}

console.log(sum(['20', '30', '40']));
