const sumAll = function(min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return 'ERROR';
    if (min < 0 || max < 0) return 'ERROR';
    if (min > max) {
        [min, max] = [max, min]
    }
    for (let i = min + 1; i <= max; i++) {
        min += i;
    }
    return min;
};

// Do not edit below this line
module.exports = sumAll;
