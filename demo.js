'use strict';

// ARRAY DESTRUCTURING

// ENHANCED OBJECT LITERALS
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
    [weekdays[3]]: {
        open: 12,
        close: 22,
    },
    [weekdays[4]]: {
        open: 11,
        close: 23,
    },
    [weekdays[5]]: {
        open: 0,
        close: 24,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    // ES6 enhanced object literals
    openingHours,

    orderDelivery({ starterIndex, mainIndex, time, address }) {
        let message = `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`;
        return message;
    },

    orderPasta(ing1, ing2, ing3) {
        let message = `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`;
        return message;
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        return mainIngredient, otherIngredients;
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
const { name, workingOn, categories } = restaurant;

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

// THE SPREAD OPERATOR (...)
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

// REST PATTERN AND PARAMETERS

// 1) Destructuring

// SPREAD, because on RIGHT side of '='
const spreadArr = [1, 2, ...[3, 4]];

//REST, because on LEFT side of '='
const [x, y, ...others] = [1, 2, 3, 4, 5];

const [pizaa, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];

// Objects
const { sat, ...resOfTheDays } = restaurant.openingHours;

// 2) Functions
const add = function (...params) {
    let sum = 0;
    for (let i = 0; i < params.length; i++) {
        sum += params[i];
    }

    return sum;
};

//LOGICAL OPERATORS
// Short Circuiting (&& and ||);
//OR operator
restaurant.numGests = 0;
const guestOne = restaurant.numGests ? restaurant.numGests : 10;
//short circuiting
const guestTwo = restaurant.numGests || 10;
//Nullish: null and undefined;
const guestCorrect = restaurant.numGests ?? 10;

// AND operator

if (restaurant.orderPizza) {
    restaurant.orderPizza('mushrooms', 'spinach');
}

// short cicuiting
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// LOGICAL ASSIGNMENT OPERATORS

const restOne = {
    name: 'Capri',
    // numGuests: 20,
    numGests: 0,
};

const restTwo = {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
};

// OR assignment operator
restOne.numGuests = restOne.numGuests || 10;
//the same as above
// restOne.numGests ||= 10;
restTwo.numGests = restTwo.numGests || 10;
//the same as above
// restTwo.numGests ||= 10;

//in case the value is '0';
//nullish assignment operator
// restOne.numGests ??= 10;
// restTwo.numGests ??= 10;

//AND assignment operator
restOne.owner = restOne.owner && '<anonymous>';
// restOne.owner &&= '<anonymous';
restTwo.owner = restTwo.owner && '<anonymous>';
// restTwo.owner &&= '<anonymous';

//LOOPING ARRAYS

const menuArr = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (let item of menuArr) {
    // console.log(item);
}

for (const [i, el] of menuArr.entries()) {
    // console.log(`${i + 1}: ${el}`);
}

// LOOPING OBJECTS: OBJECT KEYS, VALUES, AND ENTRIES

// over property names
const properties = Object.keys(openingHours);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
    openStr += `${day}, `;
}

// property values
const values = Object.values(openingHours);

// names + values
const entries = Object.entries(openingHours);

// loop over the obj
for (const [day, { open, close }] of entries) {
    // console.log(`On ${day} we open at ${open} and close at ${close}.`);
}

// SET

const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta', 'Pizza']);
// strings are iterable
const stringSet = new Set('Lucho');
// we can take size of the set
const ordersSize = ordersSet.size;
// check if something is in there (has()-method)
const bool = ordersSet.has('Pizza');
// add new element to a set
ordersSet.add('Garlick Bread');
// delete elements
ordersSet.delete('Risotto');
// delete all of the elements
// ordersSet.clear();

// loop ove the set
for (const order of ordersSet) {
    // console.log(order);
}

// use case Example

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// it returns no array, and we make it, as we know.
const staffUnique = [...new Set(staff)];

// MAPS FUNDAMENTLS

// create an emtpy map
const rest = new Map();

// fill up the map (use .set method)
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

// chain with set method
rest.set('categoris', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open')
    .set(false, 'We are closed');

// read data from a map - get method
const data = rest.get('name');

const time = 21;
let result = rest.get(time > rest.get('open') && time < rest.get('close'));

// Check if map contains certain key
const check = rest.has('categoris');

// Delete elements from the map - happends based on the key;
rest.delete(2);

// size propertie
const sizeMap = rest.size;

// clear all map
// rest.clear();

const arrKey = [1, 2];
rest.set(arrKey, 'Test');

let getArr = rest.get(arrKey);

// MAPS ITERATION

const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [(3, 'JavaScript')],
    ['correct', 3],
    [true, 'Correct'][(false, 'Try again!')],
]);

// Convert object to map
const hoursMap = new Map(Object.entries(openingHours));

for (const [key, value] of question) {
    if (typeof key === 'number') {
        console.log(`Answer ${key}: ${value}`);
    }
}

const answer = Number(prompt('Your answer'));
question.get(question.get('correct') === answer);

// convert map into an array
let mapArray = [...question];
