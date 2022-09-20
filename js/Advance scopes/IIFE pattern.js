var teacher = "kyle";

(function anotherteacher() {
    var teacher = "suzy";
    console.log(teacher);
})
();
console.log(teacher);

/* (function hello() { var a = 10;console.log(a);})
(); */

var student = "kyle";
(function(student) {
    console.log(student);
})("suzy");
console.log(student);

var stu = (function getstu() {
    try {
        return fetchstu(1);
    } catch (err) {
        return "kyle";
    }
})();