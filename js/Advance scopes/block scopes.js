// Block Scopes

var teacher = "kyle"; {
    let teacher = "suzy";
    console.log(teacher);
}
console.log(teacher);


function diff(x, y) {
    if (x > y) {
        let temp = x;
        x = y;
        y = temp;
    }
    return y - x;
}
console.log(diff());

function repeat(fn, n) {
    var result;
    for (i = 0; i < n; i++) {
        result = fn(result, i);
    }
    return result;
}
console.log(repeat());

if (true) {
    var i = 10;
    console.log(i);
}
console.log(i);

if (true) {
    let j = 20;
    console.log(j);
}
/* in let case outside of the block console.
  log(j) doesn't access inside the block scopes but var case accessible the value inside and outside
     block scopes */

console.log(j);