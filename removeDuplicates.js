function removeDuplicates(arr) {
    var noDupes = [];
    if (arr.length == 0) {
        return arr;
    }
    noDupes.push(arr[0]);
    for (var i = 1; i < arr.length; i++) {
        if(noDupes[noDupes.length-1] != arr[i]) {
            noDupes.push(arr[i]);
        }
    } return noDupes;
}

array = [1,2,2,3,3,4,5,5,6,7,8,9]
console.log(removeDuplicates(array));