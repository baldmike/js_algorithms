
function military_time(str) {
    var m = str[str.length-2];
    if (m === "P") {
        var x = String(Number(str[0]) + 1) + String(Number(str[1]) + 2);
        var y = str.slice(0, 8).slice(2, 8)
        var z = x + y
    } else {
        z = str.slice(0, 8)
    } console.log(str + " is " + z + " in military time.")
}

military_time("10:14:45PM")