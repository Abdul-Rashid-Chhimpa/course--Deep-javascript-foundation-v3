 // creating a regular function.
 /* var abdul = function() {
     console.log("hello everyone");
 }
 abdul(); */

 // converting it to an arrow function

 /* var abdul = ()=>{
     console.log("hey");
 } */

 /* var abdul = function() {
     return "how are you?"
 }
 console.log(abdul()); */

 // one lone automatically return doesn't need cerlye braces.

 var kyle = () => "hello,hey";
 console.log(kyle());

 // as print object 

 var obj = () => { name: "abdul" };
 console.log(obj()); // output:- undefined

 var obj1 = () => ({ name: "rashid" });
 console.log(obj1()); // as need to round braches as print to object.