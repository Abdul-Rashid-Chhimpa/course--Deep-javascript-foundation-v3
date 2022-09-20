/* student; // ??
teacher; // ??
var student = "you";
var teacher = "kyle";

var student;
var teacher;
student; // undefined
teacher; // undefined
student = "you";
teacher = "kyle"; */

/* teacher(); // kyle
otherTeacher(); // ??
function teacher() {
    return "abdul";
}
var otherTeacher = function() {
    return "rashid";
};


function teacher() {
    return "kyle";
}
var otherTeacher;
teacher(); // kyle
otherTeacher(); // typeError
otherTeacher = function() {
    return "suzy";
};  */


var teacher = "kyle";
otherTeacher();

function otherTeacher() {
    console.log(teacher);
    var teacher = "suzy";
} // undefined

getTeacher();

function getTeacher() {
    return teacher;
} {
    teacher = "kyle";
    let teacher;
} // let doesn't hoist ? false

var teacher = "abdul"; {
    console.log(teacher);
    let teacher = "rashid";
}