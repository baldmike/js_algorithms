var remainder = 0;
var hundreds = "";
var tens = "";
var ones = "";

function tenSpot(num) {
    remainder = (num % 10);
    oneSpot(remainder);
    if (num === 100) {
        tens = "C"
    } else if (num > 89 && num <100) {
        tens = "XC" + ones;
    } else if (num > 79 && num < 90) {
        tens = "LXXX" + ones;
    } else if (num > 69 && num < 80) {
        tens = "LXX" + ones;
    } else if (num > 59 && num < 70) {
        tens = "LX" + ones;
    } else if (num > 49 && num < 60) {
        tens = "L" + ones;
    } else if (num > 39 && num < 50) {
        tens = "XL" + ones;
    } else if (num > 29 && num < 40) {
        tens = "XXX" + ones;
    } else if (num > 19 && num < 30) {
        tens = "XX" + ones;
    } else if (num > 9 && num < 20) {
        tens = "X" + ones;
    } else {
        tens = ones;
    } return tens;
}

function oneSpot(remainder){
    if (remainder === 1) {
        ones = "I";
    } else if (remainder === 2) {
        ones = "II";
    } else if (remainder === 3) {
        ones = "III";
    } else if (remainder === 4) {
        ones = "IV";
    } else if (remainder === 5) {
        ones = "V";
    } else if (remainder === 6) {
        ones = "VI";
    } else if (remainder === 7) {
        ones = "VII";
    } else if (remainder === 8) {
        ones = "VIII";
    } else {
        ones = "IX"
    } return ones;
}


console.log("Your number is " + tenSpot(69))