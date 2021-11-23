/**
 *    1. Towns to JSON
You're tasked to create and print a JSON from a text table. You will receive input as an array of strings, where each string represents a row of a table, with values on the row encompassed by pipes "|" and optionally spaces. The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". The latitude and longitude columns will always contain valid numbers. Check the examples to get a better understanding of your task.
Input
The input comes as an array of strings – the first string contains the table’s headings, each next string is a row from the table.
Output
    • The output should be an array of objects wrapped in JSON.stringify(). 
    • Latitude and longitude must be parsed to numbers, and represented till the second digit after the decimal point!
 */

function extractKeys(str) {}

function solve(data) {
    let keys = [];
    let keysToBe = data[0].split('|');

    for (let i = 0; i < keysToBe.length; i++) {
        if (keysToBe[i] != '') {
            keys.push(keysToBe[i].trim());
        }
    }

    let values = [];

    for (let i = 1; i < data.length; i++) {
        let row = data[i].split('|');
        let valuesToBe = [];
        for (let j = 0; j < row.length; j++) {
            if (row[j] !== '') {
                let value = Number(row[j]);
                if (isNaN(value)) {
                    value = row[j].trim();
                } else {
                    value = Math.floor(value * 100) / 100;
                }

                valuesToBe.push(value);
            }
        }

        values.push(valuesToBe);
    }

    let result = [];

    for (let i = 0; i < values.length; i++) {
        let obj = {};
        for (let j = 0; j < keys.length; j++) {
            let key = keys[j];
            let value = values[i][j];
            obj[key] = value;
        }
        result.push(JSON.stringify(obj));
    }

    return result;
}

console.log(
    solve([
        '| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |',
    ])
);
