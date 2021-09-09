'use strict';

const rangeOdd = (start, end) => {
    const array = [];
    for (let i = 0; i <= end - start; i++) {
        const current = i + start;
        if (Math.abs(current) % 2 === 1) array.push(current);
    }
    return array;
};

rangeOdd(-2, 2);
module.exports = { rangeOdd };
