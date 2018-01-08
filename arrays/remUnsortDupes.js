// Remove duplicates from an unsorted array

function removeDupesUnsorted (arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i+1; j < arr.length; j++) {
            if (arr[j] == arr[i]) {
                arr.splice(j,1);
            }
        }
    } return arr;
}

array = [1,5,3,5,4,2,5,6,7,6];
console.log(removeDupesUnsorted(array));

