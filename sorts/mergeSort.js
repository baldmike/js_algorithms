function MergeSort(arr) {
    // if array is only 1 item, it's sorted
    if (arr.length == 1) {
        return arr;
    }

    // find the middle -  if odd, left will be smaller 
    var middle = Math.floor(arr.length/2);
    
    // split into two arrays
    var firstHalf = arr.slice(0, middle);
    var secondHalf = arr.slice(middle, arr.length);

    // 
    var firstHalfSorted = MergeSort(firstHalf);
    var secondHalfSorted = MergeSort(secondHalf);

    var i = 0;
    var j = 0;

    var result = [];

    while (i < firstHalfSorted.length && j < secondHalfSorted.length) {
        if(firstHalfSorted[i] < secondHalfSorted[i]) {
            result.push(firstHalfSorted[i])
            i++
        } else { result.push(secondHalfSorted[j])
            j++
        }
    }

    if (i == firstHalfSorted.length) {
        for (j=0; j<secondHalfSorted.length; j++) {
            result.push(secondHalfSorted[j]);
        } 
    } else {
        for (i; i<firstHalfSorted; i++) {
            result.push(firstHalfSorted);
        }
    }
    return result;
}



console.log(MergeSort([4,3,1,7,9,2,5,6,8]));