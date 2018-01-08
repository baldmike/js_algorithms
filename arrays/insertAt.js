// insert val at arr[index], while deleting 0 itmems

function addAtIndex (arr, index, val) {
    arr.splice(index, 0, val)
    return arr
}

// insert 4 at arr[3]
console.log(addAtIndex ([1,2,3,5], 3, 4))