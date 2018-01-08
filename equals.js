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

console.log(equals [1,2,3,4,10])