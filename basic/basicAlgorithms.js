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
    for (var i = 0; i <= n-1; i++) {
        arr.push(i);
    } console.log("Original array: " + arr);
    for (var j = d; j <= n-1; j++) {
        newArr.push(arr[j]);
    }
    for (var k = 0; k < d; k++) {
        newArr.push(arr[k]);
    } console.log("New Array: " + newArr);
}   

arr = [43, 57, 34, 909, 1, 394,]
move(12, 4, arr)
