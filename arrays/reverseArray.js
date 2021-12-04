/*
Write a program which receives a number n and an array of elements. Your task is to create a new array with n numbers, reverse it and print its elements on a single line, space separated.
*/

function reverse(num, array) {
    let result = [];

    for (let i = 0; i < num; i++) {
        let current = array[i];

        result.unshift(current);
    }

    return result;
}

console.log(reverse(3, [-1, 20, 99, 5]));
