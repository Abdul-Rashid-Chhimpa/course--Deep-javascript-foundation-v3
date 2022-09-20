function teacher() {
    var myTeacher = function anotherTeacher() {
        console.log(anotherTeacher);
    }

}
console.log(teacher);
console.log(myTeacher);
console.log(anotherTeacher); //Reference Error.

// Named Function Esxpression

var clickhandler = function() {
    //..
}