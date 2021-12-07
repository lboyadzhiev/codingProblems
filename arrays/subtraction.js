/*
Write a program that calculates the difference between the sum of the even and the sum of the odd numbers in an array.
*/

function solve(input) {
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < input.length; i++) {
        let num = input[i];

        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    return evenSum - oddSum;
}

console.log(solve([3, 5, 7, 9]));
