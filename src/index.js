
const num = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
}




module.exports = function toReadable(number) {
    if (number === 0)
        return num[0];
    let s = [];
    const d = number % 100;

    if (number >= 100)
        s = [num[Math.trunc(number / 100)], 'hundred'];

    if (d > 0) {
        if (num[d])
            s.push(num[d]);
        else
            s.push(num[Math.trunc(d / 10) * 10], num[d % 10]);
    }
    return s.join(' ');

}