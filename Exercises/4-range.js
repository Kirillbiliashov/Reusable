'use strict';

const range = (start, end) => {
    if (start > end) return [];
    const array = [];
    for (let i = 0; i <= end - start; i++) {
        array.push(i + start);
    }
    return array;
};

range(15, 30);
module.exports = { range };
