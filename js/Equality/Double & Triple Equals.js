// Double equals'Abstract equality': Check value(loose)
// Triple equals : Check value & Check type(Strict)
var x = 10; // Number
var y = "10"; // String
console.log(x == y); //only check value doesn't check datatype,value are same output:- true.
console.log(x === y); //check value, value are same but datatype doesn't same output:- false.


var a; //undefind
var b = null; //Null
console.log(a == b);
console.log(a === b);

var stuname = "abdul";
var numstu = 20;
if (stuname === numstu) {
    console.log(true);
} else {
    console.log(false);
}