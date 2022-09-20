/* coercion as 'type conversion'.
     abstract operation as three type:-
                                1.) toString.
                                2.) toNumber.
                                3.) toPrimitive.
*/
/* var a = {
    name: Number("25"),
    age: 25,
};
console.log(a.name.Number(), (typeof name)); */


var msg1 = "there are";
var numstudent = 10;
var msg2 = "student.";
console.log(msg1 + " " + numstudent + " " + msg2);
// there are 10 student.

// implicit vs explicit coercion or conversion.
// implicit coercion.
// for example :- 
var z = "abdul";
console.log(z + 1);
console.log(typeof z);
/* '+' operator as wrok different in String case.
                        in String case as work concatication String.
                         */

var t = "20";
var num = new Number(t);
console.log(num * 2);
console.log(typeof t);