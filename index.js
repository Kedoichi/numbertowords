function convertNumberToWords(number) {
    
 if (number <=20){
  
    return numberWords[number];
 }
 if (number <100){


 }

 if (number < 1000){


 }

 
}

const numberWords = {
    0:'zero',
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
  20: "twenty",
};

const DigitsDividedBy10={
    2 :'twenty',
    3:'thirty',
    4:'fourty'

}

module.exports = { convertNumberToWords };
