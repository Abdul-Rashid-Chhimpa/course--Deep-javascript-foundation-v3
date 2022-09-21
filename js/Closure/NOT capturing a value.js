var teacher = "abdul";
var myTeacher = function() {
    console.log(teacher);
};
teacher = "rashid";
myTeacher();

// Modules
var workshop = {
    teacher: "kyle",
    ask(question) {
        console.log(this.teacher, question);
    },
};
workshop.ask("Is this a module?");
