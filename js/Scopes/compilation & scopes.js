var teacher = "abdul"; //global variable

function otherClass() {
    var teacher = "rashid";
    console.log("Welcome!");
}
otherClass(); //Welcome! 

var teacher1 = "abdul";

function ask() {
    var teacher2 = "rashid"; // local variable
    console.log(teacher2);
}
ask(); // rashid