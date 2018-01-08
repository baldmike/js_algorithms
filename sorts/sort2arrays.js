function sort2Arrays (arr1, arr2) {
    var newArr = [];
    var min = 0;
    for (var i = 0; i < arr1.length; i++) {
   
        for (var k = 0; k < arr2.length; k++) {
            if (arr1[i] < min) {
                min = arr1[i];
                newArr.push(arr1[i]); 
            } if (arr2[k] < min) {
                min = arr2[k]
                newArr.push(arr2[k]);
            }
            
    } return newArr;
    
}
}
arr1 = [5,8,12,6,25,1]
arr2 = [6,9,34,1,4,57]

console.log(sort2Arrays(arr1, arr2));