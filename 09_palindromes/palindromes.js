const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
const palindromes = function (str) {
    str = str.toLowerCase();
    let arrNormal = [...str].filter(item => alphanumerical.includes(item));
    let arrReverse = arrNormal.slice().reverse();
    return (arrNormal.every((value, index) => {return value === arrReverse[index];}));
};

// Do not edit below this line
module.exports = palindromes;
