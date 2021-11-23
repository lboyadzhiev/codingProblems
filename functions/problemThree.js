/*
    Recreate problmeTwo, but this time create an arrow fuctio called 'percentageOfWorld3'
*/

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const bulgaria = percentageOfWorld3(10);
const germany = percentageOfWorld3(1441);
const portugal = percentageOfWorld3(33);

console.log(bulgaria, germany, portugal);
