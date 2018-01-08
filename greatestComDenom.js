function greatestCommonDenom(x,y) {
    var sm = 1;
    var lg = 1;
    var gcd = 1;

    if (x<y) {
        sm = x;
        lg = y;
    } else {
        sm = y;
        lg = x;
    }
    for (var i = sm; i >= 1; i--) {
        if (sm%i == 0 && lg%i == 0) {
            gcd = i;
            return gcd;
        }
    }
}

console.log(greatestCommonDenom(208, 400));