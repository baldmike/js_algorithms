var one_remainder = 0;
var tens_remainder = 0;
var roman_numeral = "";
var tens = "";
var ones = "";

function fullNum(num) {
    tens_remainder = (num % 100)
    tenSpot(tens_remainder)
    if (num > 1000) {
        console.log("NUMBER MUST BE LESS THAN 1001");
        return num;
    }
    if (num === 1000) {
        roman_numeral = "M"
    } else if (num > 899 && num < 1000) {
        roman_numeral = "CM" + tens;
    } else if (num > 799) {
        roman_numeral = "DCCC" + tens;
    } else if (num > 699) {
        roman_numeral = "DCC" + tens;
    } else if (num > 599) {
        roman_numeral = "DC" + tens;
    } else if (num > 499) {
        roman_numeral = "D" + tens;
    } else if (num > 399) {
        roman_numeral = "CD" + tens;
    } else if (num > 299) {
        roman_numeral = "CCC" + tens;
    } else if (num > 199) {
        roman_numeral = "CC" + tens;
    } else if (num > 100) {
        roman_numeral = "C" + tens;
    } else {
        roman_numeral = tens;
    } return roman_numeral;
}

function tenSpot(fullNum) {
    one_remainder = (fullNum % 10);
    oneSpot(one_remainder);
    if (fullNum === 100) {
        tens = "C"
    } else if (fullNum > 89 && fullNum <100) {
        tens = "XC" + ones;
    } else if (fullNum > 79 && fullNum < 90) {
        tens = "LXXX" + ones;
    } else if (fullNum > 69 && fullNum < 80) {
        tens = "LXX" + ones;
    } else if (fullNum > 59 && fullNum < 70) {
        tens = "LX" + ones;
    } else if (fullNum > 49 && fullNum < 60) {
        tens = "L" + ones;
    } else if (fullNum > 39 && fullNum < 50) {
        tens = "XL" + ones;
    } else if (fullNum > 29 && fullNum < 40) {
        tens = "XXX" + ones;
    } else if (fullNum > 19 && fullNum < 30) {
        tens = "XX" + ones;
    } else if (fullNum > 9 && fullNum < 20) {
        tens = "X" + ones;
    } else {
        tens = ones;
    } return tens;
}

function oneSpot(one_remainder){
    if (one_remainder === 1) {
        ones = "I";
    } else if (one_remainder === 2) {
        ones = "II";
    } else if (one_remainder === 3) {
        ones = "III";
    } else if (one_remainder === 4) {
        ones = "IV";
    } else if (one_remainder === 5) {
        ones = "V";
    } else if (one_remainder === 6) {
        ones = "VI";
    } else if (one_remainder === 7) {
        ones = "VII";
    } else if (one_remainder === 8) {
        ones = "VIII";
    } else if (one_remainder === 9) {
        ones = "IX";
    } else {
        ones = "";
    }    
    return ones;
}

console.log("Your Roman number is " + fullNum(400))