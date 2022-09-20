function isvValidName(name) {
    if (typeof name == "string") {
        return true;
    } else {
        return false;
    }
}
console.log(isvValidName("abdul") === true);
// output:- true.

function isInteger(num) {
    if (typeof num == Number) {
        return true;
    }
    return false;
}
console.log(Number.isInteger(10) === true);
// output:- true.