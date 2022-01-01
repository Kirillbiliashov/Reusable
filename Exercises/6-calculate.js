'use strict';

const square = x => x ** 2;

const cube = x => x ** 3;

const average = (a, b) => (a + b) / 2;

const calculate = () => {
    const results = [];
for (let i = 0; i < 10; i++) {
   const averaged = average(square(i), cube(i));
   results.push(averaged);
}
return results;
}

module.exports = { square, cube, average, calculate };
