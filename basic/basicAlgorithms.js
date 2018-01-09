function count(low, high, mult) {
    for (var i = high; i >= low; i--) {
        if (i % mult === 0) {
            console.log(i)
        }
    }
}

count(2,9,3)

function newArray(num) {
    var newArr = [];
    for (var i = num; i >= 0; i--) {
        newArr.push(i);
    } return newArr;
}

console.log(newArray(20))

// Given an array of <n> integers and a number, <d> , perform <d> left rotations on the array. Then print the updated array as a single line of space-separated integers.

function move(n, d, arr) {
    newArr = [];
    console.log("Original array: " + arr);
    for (var j = d; j <= n-1; j++) {
        newArr.push(arr[j]);
    }
    for (var k = 0; k < d; k++) {
        newArr.push(arr[k]);
    } console.log("New Array: " + newArr.join(" "));
}   

arr = [43, 57, 34, 909, 1, 394]
move(12, 4, arr)


// Every student receives a  in the inclusive range from  to .
// Any  less than  is a failing grade.
// Sam is a professor at the university and likes to round each student's  according to these rules:

// If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
// If the value of  is less than , no rounding occurs as the result will still be a failing grade.
// For example,  will be rounded to  but  will not be rounded because the rounding would result in a number that is less than .

// Given the initial value of  for each of Sam's  students, write code to automate the rounding process. For each , round it according to the rules above and print the result on a new line.

function gradeRound(n, grades) {
    console.log("original grades: " + grades)
    for (var i = 0; i < n; i++) {
        if (grades[i] < 38) {
            grades[i] = grades[i];
        } else if (grades[i] % 5 > 2) {
            grades[i] += 5;
            grades[i] = (Math.floor(grades[i]/5) * 5);
        } 
    } console.log("rounded grades: \n" + grades.join("\n"));
}

g = [37, 72, 79, 83, 99]
gradeRound(5, g)



// Fahrenheit to celsius, -100 < tempF <120

function fahrenheit(tempF) {
    var tempC = 0;
    if (tempF > -100 && tempF < 120) {
        tempC = Math.ceil((5 * (tempF-32))/9);
        console.log(tempF + " Fahrenheit = " + tempC + " in Celsius.");
    } else {
        console.log("Please enter a valid fahrenheit temperature between -100 & 120.")
    }
}

fahrenheit(-40)

// Compare F and C

function compareFC() {
    c = 0;
    for (var f = -100; f < 121; f++) {
        c = Math.ceil((5 * (f-32))/9);
        console.log(c + " celsius = " + f + " fahrenheit.")
    }
}

compareFC()