// 1.) toString()

var a = "99";
var num = new Number(a);
console.log(num);
/* in console show output :- 99 , String. but (a+1) increament in console show output :- 991 ,String why? because
                         (a+1) increament as work concatication or add two string.  */
/* var num = new Number(a); as work a String value are convert into number value after then are perform
   (num + 1) as show result in console :- 100, String because a string value are convert into number value and after then (num +1) increament in number value.
    */
console.log(typeof a);