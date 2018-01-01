// Reverse a string
function reverse (str) {
    var newStr = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}


var x = "54321";
console.log(reverse(x));



// Is string a palindrome
function palindrome(str) {
    for (var i = 0; i < str.length/2; i++) {
        if (str[i] != str[str.length-1-i]) {
            return false;
        } else {
            return true;
        }
    }
}
var y = "blobbolb";
console.log(palindrome(y));



// FizzBuzz
function fizzBuzz() {
    for (var i = 1; i < 101; i++) {
        if (i%15 == 0) {
            console.log("FizzBuzz");
        } else if (i%5 == 0) {
            console.log("Buzz");
        } else if (i%3 == 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }

    }
}
fizzBuzz();


function greatestCommonDenom(x,y) {
    var sm = 1;
    var lg = 1;
    var gcd = 1;

    if (x<y) {
        sm = x;
        lg = y;
    } else {
        sm = y;
        lg = x;
    }
    for (var i = sm; i >= 1; i--) {
        if (sm%i == 0 && lg%i == 0) {
            gcd = i;
            return gcd;
        }
    }
}

console.log(greatestCommonDenom(208, 400));