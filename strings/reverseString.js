// Reverse a string

function reverse(str) {
    newStr = "";
    for (var i = str.length-1; i >= 0; i--) {
        newStr += str[i];
    } console.log(newStr);
}

reverse("straf")