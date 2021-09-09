'use strict';

const range = (start, end) => {
    const array = [];
    for (let i = 0; i <= end - start; i++) {
        array.push(i + start);
    }
    return array;
};

range(15, 30);
module.exports = { range };
