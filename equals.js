function equals (arr) {
    for (var i = 0; i < arr.length-1; i++) {
        sum1 = 0;
        sum2 = 0;
        for (var j = 0; j < i + 1; j++) {
            sum1 += arr[j];
        }
        for (var k=i+1; k<arr.length; k++) {
            sum2 += arr[k];
            if (sum1 === sum2) {
                return true;
            }
        }
    } return false;
}

equals [1,2,3,4,10]


// REMOVE DUPLICATES
// THIS DOESN'T WORK
// function removeDupes (arr) {
//     for (var i = 1; i < arr.length; i++) {
//         for (var j = 0; j < i, j++) {
//             if (arr[i] === arr[j]) {
//                 arr = arr.splice(i, 1),
                
//             }
//         }
//     }
// }