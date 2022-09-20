var teacher1 = "kyle";

function otherclass() {
    var teacher2 = "suzy";

    function ask(question) {
        console.log(teacher, question);
    }
    ask("why?");
}
console.log(otherclass);
// console.log(ask()); // ask is not defined
// console.log(teacher1); // globle scopes
//console.log(teacher2); // local scopes