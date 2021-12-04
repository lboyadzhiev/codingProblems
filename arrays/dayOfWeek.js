/*
Write a program which receives a number and prints the corresponding name of the day of week. 
If the number is NOT a valid day, print 'Invalid day!'.
*/

function solve(num) {
    const week = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thurday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday',
    };

    if (num < 1 || num > 7) {
        return 'Invalid day!';
    }

    return week[num];
}

console.log(solve(1));
