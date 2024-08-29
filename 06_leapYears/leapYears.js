const leapYears = function(year) {
    const isDividedByFour = isDivided(year, 4);
    const isDividedByHundread = isDivided(year, 100);
    const isDividedByFourHundread = isDivided(year, 400);

    if (isDividedByFour && !isDividedByHundread || 
    isDividedByHundread && isDividedByFourHundread) {
        return true;
    } else {
        return false;
    }
};

function isDivided(num, div) {
    return (num % div) === 0;
}
// Do not edit below this line
module.exports = leapYears;
