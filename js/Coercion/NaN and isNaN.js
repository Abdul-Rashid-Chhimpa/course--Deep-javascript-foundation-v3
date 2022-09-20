//1.) NaN(Not a Number)

var a = "20";
var b = 10;
var c = 20;
var d = "Hello";
document.write(a / b); /* output :- 2 , and in string number are assign string value are convert into number. legal Number.   */

document.write("<br>");

var a = "20";
var b = 10;
var c = 20;
var d = "Hello";
document.write(a / d); /* output :- NaN(Not a Number) and in string value doesn't convert into number as illegal  number.   */

//2.) isNaN(is NOt a Number)

document.write("<br>");

var a = "20";
var b = 10;
var c = 20;
var d = "Hello";
document.write(isNaN(d));
/* isNaN() as check legal number and illegal number and output value as true and false.
                                 output:- true and document.write(isNaN(b)); output:- false
                                    */

document.write("<br>");

document.write(-5 / 0); //output: -Infinity

document.write("<br>");

document.write(5 / 0); //output: Infinity