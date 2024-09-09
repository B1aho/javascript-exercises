const findTheOldest = function(people) {
    const arr = people.toSorted((a, b) => {
        let currentYear = (new Date()).getFullYear();
        let first = (a.yearOfDeath) ? (a.yearOfDeath - a.yearOfBirth) : (currentYear - a.yearOfBirth);
        let second = (b.yearOfDeath) ? (b.yearOfDeath - b.yearOfBirth) : (currentYear - b.yearOfBirth);
        return second - first;
    })
    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
