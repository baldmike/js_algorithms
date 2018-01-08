//  given an unordered array with 1 item missing, find missing item

function findMissing (arr) {
    var sumArr = 0;
    var sumCheck = 0;

    for (var i=arr.length-1; i >= 0; i--) {
        sumArr += arr[i];
        sumCheck += i+1;
    }

    return sumCheck - sumArr;
}

arr = [0,2,8,3,5,4,7,1,6]

console.log("The missing number is " + findMissing(arr));

