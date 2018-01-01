// function addAtIndex (arr, index, val) {
//     insertAt(arr,index,val);
//     return arr
// }


// console.log(addAtIndex ([1,2,3,5], 3, 4))



function minAbs(arr) {
    arr.sort(function(a, b) {return a-b});
    console.log(arr);
    var smallest = Math.abs(arr[1] - arr[0]);
    for (var i = 3; i < arr.length-1; i++) {
        var difference = arr[i+1]-arr[i];
        if (Math.abs(difference) < smallest) {
            smallest = Math.abs(difference);
        }
    }
    return smallest;
}

console.log(minAbs([1,5,20,9,11]))

