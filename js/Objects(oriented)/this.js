/* a function's this reference the exucution context for call,
 determined entirly by how the function was called.*/
var teacher = "kyle";

function ask(question) {
    console.log(teacher, question);
}

function otherclass() {
    var teacher = "suzy";
    ask("why");
}
otherclass();

function hey(question) {
    console.log(this.teacher, question);
}

function otherclass() {
    var myContext = {
        teacher: "abdul"
    }
    ask.call(myContext, "hello!");
}
otherclass(); 

// kyle hello!
// kyle hello!
