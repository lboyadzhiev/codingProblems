'use strict';

// ARRAY DESTRUCTURING

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },
    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
        let message = `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`;
        return message;
    },

    orderPasta: function (ing1, ing2, ing3) {
        let message = `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`;
        return message;
    },
};

restaurant.orderDelivery({
    time: '22:30',
    address: 'Plovdiv',
    mainIndex: 2,
    starterIndex: 2,
});

const [first, , second] = restaurant.categories;

let [main, secondary] = restaurant.categories;

[main, secondary] = [secondary, main];

// Receive 2 return values from a fucntion
const [starter, mainCourse] = restaurant.order(2, 0);

//Nested desctructuring
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];

// OBJECT DESTRUCTURING

// props exactly like in the object
const { name, openingHours, categories } = restaurant;

// our varable names
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;

// default values
const { menu = [] } = restaurant;

// Mutating varables
let a = 111;
let b = 888;

const obj = { a: 32, b: 8, c: 44 };

({ a, b } = obj);

// Nested Objects
const {
    fri: { open: o, close: c },
} = openingHours;

// The spread operator (...)
const arr = [7, 8, 9];
//we need to add new elements to the beggining of the array
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
const newArr = [1, 2, ...arr];

// we will create a new array with element from the restaurant object - mainMenu, and add new element to it.
const newMenu = [...restaurant.mainMenu, 'Gnocci'];

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

//Join arrays
const allMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// with strings
const str = 'Lucho';
const letters = [...str, ' ', 'S.'];

//example
const ingredients = ['a', 'b', 'c'];

restaurant.orderPasta(...ingredients);

//objects

const newRestaurant = { ...restaurant, founder: 'Guiseppe' };

//we can make a copy of the object
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
