function validPar(str) {
    var counter = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i] == "(") {
            counter += 1;
        } else if (str[i] == ")") {
            counter -= 1;
        }
        if (counter < 0) {
            return false;
        }
    }
    return (counter === 0);
}

var string = "(apples()())";

var ans = validPar(string);
console.log(ans);

