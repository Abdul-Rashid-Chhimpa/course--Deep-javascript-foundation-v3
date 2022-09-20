var teacher = "kyle";

function ask(question) {
    console.log(teacher, question);
}

function otherclass() {
    var teacher = "suzy";
    ask("why?");
}
otherclass();