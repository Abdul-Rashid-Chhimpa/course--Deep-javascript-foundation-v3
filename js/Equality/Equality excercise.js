function setsMatch(arr1, arr2) {
    if (Array.isArray(arr1) && Array.isArray(arr2)) {
        for (let v of arr1) {
            if (!arr2.includes(v)) return false;
        }
        return true;
    }
    return false;
}

function setsMatch(arr1, arr2) {
    if (Array.isArray(arr1) && Array.isArray(arr2)) {
        for (let v of arr1) {
            if (!arr2.includes(v)) return false;
        }
        return true;
    }
    return false;
}

function findAll() {
    var ret = [];
    for (let v of arr) {
        if (Object.is(match, v)) {
            ret.push(v);
        } else if (match == null && v == null) {
            ret.push(v);
        } else if (typeof match == "boolean" && typeof v == "boolean") {
            if (match == v) {
                ret.push(v);
            }
        }

    }
    return ret;
}
var myobj = { a: 2 };
var values = [null, undefined, NaN, true, false, Infinity, -Infinity, 0, "-0", myobj];
console.log(setsMatch(findAll(null, values), [null, undefined]) === true);