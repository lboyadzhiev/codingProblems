'use strict';

//Array Distructuring

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
};

const [first, , second] = restaurant.categories;

console.log(first, second);

let [main, secondary] = restaurant.categories;

[main, secondary] = [secondary, main];

// Receive 2 return values from a fucntion
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//Nested desctructuring
const nested = [2, 4, [5, 6]];

const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
