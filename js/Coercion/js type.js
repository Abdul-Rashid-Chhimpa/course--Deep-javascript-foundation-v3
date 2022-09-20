// 1.) Primitive type

var a;
typeof a; //"undefined"

var a = "10";
typeof a; //"String"

var a = Null;
typeof a; // "Null"

var a = 10;
typeof a; //"number"

a = true;
typeof a; // "Boolean"

a = {};
typeof a; //"object"

t = Symbol();
typeof t; //"Symbol"   // Symbol value means as uniqe value. Symbol("description").
console.log(t);

/* var a = 1000000000 n; // "Bigint".
console.log(a); */

var a = Bigint(10000000);
console.log(a);
/* Bigint as use handle the numeric value.
               number(primitive datatype) are not handle lengthy numeric value. */

var a = null;
typeof a; //"object"    oops;

a = function() {}
typeof a; //"function" hmmmm?

a = [1, 2, 3];
typeof a; //"object" hmmmm?   
/* Java types:-
               1.) primitive type:typeof
               for example:- undefined,String,number,
                            Boolean,object,Symbol,Bigint.

               2.) non-primitive/reference
                for example:-array,fucntion.....etc.
 */

// undefined vs undefined.  


var x; //"undefined". value are set but as empty.as know defined.

document.write(x);
document.write("<br>");
document.write(typeof x);
document.write("<br>");

var s = 10; // "defined".value are assign.

document.write(s);
document.write("<br>");
document.write(typeof s);

var u = "hello";
var v = "hey";
var w = (u - v);
/* two string are minus as show output :- NaN(Not a Number).
                    but two string are add as show output :- concatication or add two string. */
console.log(w);
console.log(typeof w);

// Symbol vs String.

var a = Symbol("hello");
console.log(a);
console.log(typeof a); // show output:- typeof a: Symbol.


var b1 = Symbol("hello");
var b2 = Symbol("hello");
console.log(b1 == b2); // as show output:- false. because desciption value same but datatype are not same.
// Symbol as self as uniqe value.

var b3 = "hello";
var b4 = "hello";
console.log(b3 == b4); // as show output:- true.
// String value are same but datatype are same.

// 2.) Non-Primitive type
/*    -> Array
      -> function
      -> object
*/