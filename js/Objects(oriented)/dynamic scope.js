var teacher = "abdul";

function ask(question) {
    console.log(teacher, question);
}

function otherclass() {
    var teacher = "rashid";
    ask("why?");
}
otherclass();