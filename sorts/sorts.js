// Insertion Sort
function insertionSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    for (var i = 1; i < arr.length; i++) {
        var j = i -1;
        var temp = arr[i];
        while (j>=0 && temp<arr[j]) {
            arr[j+1]=arr[j]
            j=j-1;
        }
        arr[j+1]=temp;
        console.log (arr);
    } 
} 

array = [3,4,1,9,2,6,5,8,7]
insertionSort(array);


