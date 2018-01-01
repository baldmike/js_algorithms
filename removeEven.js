function removeEven (arr) {
    return arr.filter(function (x) {

        return (x.length%2 != 0)

    }); 
}
 
console.log (removeEven (["oddWord", "goodWord", "odd", "even"]))



// ----------------------------------------------
function returnMiddle (arr, min, max) {
    return arr.filter(function (x) {
        return (x>min && x<max);
    });
}

console.log (returnMiddle ([1,2,3,4,5,6,7,8], 2, 7))



// ----------------------------------------------
function flatten (arr) {
    return arr.reduceRight(function (a, b) {
        return a.concat(b);
    });
}

console.log (flatten ([1,4,2,[1,2,3,], 34, 5, [3,2]]))



// --------------------------------------------


