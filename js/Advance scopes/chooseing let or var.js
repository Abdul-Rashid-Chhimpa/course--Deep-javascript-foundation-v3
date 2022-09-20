function repeat(fn, n) {
    var result;
    for (let i = 0; i < n; i++) {
        result = fn(result, i);
    }
    return result;
}
console.log(repeat());

function lookupRecord(searchStr) {
    try {
        var id = getRecord(searchStr);
    } catch (err) {
        var id = -1;
    }
    return id;
}
console.log(lookupRecord());