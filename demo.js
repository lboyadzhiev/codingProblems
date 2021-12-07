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

        console.log(message);
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
