// expecting a number between 0 and 999,999
const numberToWordMap = {
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

function convertNumberToWords(number) {
    if(number < 100) {
        return convertNumberUnder100ToWords(number);
    }
    if (number < 1000) {
        return convertNumberUnder1000ToWords(number);
    }

    if (number < 1000000) {
        return convertNumberUnder1000000ToWords(number);
    }
}

function convertNumberUnder100ToWords(number) {
    if(number < 20) {
        return numberToWordMap[number];
    }

    const tens = getMultipleOfTen(number);
    const ones = number % 10;
    if(ones === 0) {
        return numberToWordMap[tens];
    }
    return `${numberToWordMap[tens]} ${numberToWordMap[ones]}`;
}

function convertNumberUnder1000ToWords(number) {
    if(number < 100) {
        return convertNumberUnder100ToWords(number);
    }
    const hundreds = Math.floor(number / 100);
    const remainingNumber = number % 100;
    const hundredsInWords = `${numberToWordMap[hundreds]} hundred`;
    if(remainingNumber === 0) {
        return hundredsInWords;
    }
    return `${hundredsInWords} and ${convertNumberUnder100ToWords(remainingNumber)}`;
}

function convertNumberUnder1000000ToWords(number) {
    const thousands = Math.floor(number / 1000);
    const remainingNumber = number % 1000;
    const thousandsInWords = `${convertNumberUnder1000ToWords(thousands)} thousand`;
    if(remainingNumber === 0) {
        return thousandsInWords;
    }
    return `${thousandsInWords} ${convertNumberUnder1000ToWords(remainingNumber)}`;

}

function getMultipleOfTen(number) {
    return Math.floor(number / 10) * 10;
}

module.exports = { convertNumberToWords };