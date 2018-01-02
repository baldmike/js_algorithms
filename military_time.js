
function military_time(s) {
    var m = s[s.length-2];
    if (m === "A" && (Number(s[0]) + Number(s[1])) === 3) {
        var x = String(Number(s[0]) - 1) + String(Number(s[1]) - 2);
        var y = s.slice(0, 8).slice(2, 8);
        var z = x + y;
    } else if (m === "P" && (Number(s[0]) + Number(s[1]) === 3)) {
        z = s.slice(0, 8);
    } else if (m === "P") {
        var x = String(Number(s[0]) + 1) + String(Number(s[1]) + 2);
        var y = s.slice(0, 8).slice(2, 8);
        var z = x + y;
    } else {
        z = s.slice(0, 8)
    } console.log(s + " is " + z + " in military time.")
}

military_time("12:59:45AM")