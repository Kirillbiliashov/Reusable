'use strict';

const rangeOdd = (start, end) => {
    if (start > end) return [];
    const array = [];
    for (let i = 0; i <= end - start; i++) {
        const current = i + start;
        if (Math.abs(current) % 2 === 1) array.push(current);
    }
    return array;
};

rangeOdd(-2, 2);
module.exports = { rangeOdd };
