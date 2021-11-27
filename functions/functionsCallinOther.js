/*

1. Create a function called 'describePopulation'. Use the function type you
like the most. This function takes in two arguments: 'country' and
'population', and returns a string like this: 'China has 1441 million people,
which is about 18.2% of the world.'
2. To calculate the percentage, 'describePopulation' call the
'percentageOfWorld1' you created earlier
3. Call 'describePopulation' with data for 3 countries of your choice
 
 */

const percentageOfWorld3 = (population) => (population / 7900) * 100;

function describePopulation(country, population) {
    let percent = percentageOfWorld3(population);
    return `${country} has ${population} milion people, which is about ${percent}% of the world.`;
}

console.log(describePopulation('Bulgaria', 8000));
console.log(describePopulation('France', 10000));
console.log(describePopulation('Belgium', 80000));
