/*
Write a function that receives a text and a word to remove all occurrences of it inside the text.
*/

function removeOccurences(word, text) {
    let [...letters] = word;
    let result = text;

    for (let letter of letters) {
        result = result.split(letter).join('');
    }

    return result;
}

console.log(removeOccurences('ice', 'kicegiciceeb'));
