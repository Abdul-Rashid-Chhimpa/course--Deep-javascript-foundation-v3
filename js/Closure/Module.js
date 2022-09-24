/* Modules types :- 
                1. export module 
                2. import module */
// For Example
var workshop = {
    teacher: "abdul",
    ask(question) {
        console.log(this.teacher, question)
    },
};
workshop.ask("is this a module");
// abdul is this a module

/* Modules encapsulate data and behavior(method) together.the state(data) of a module is held by via closure. */

var a = (function module(teacher) {
    var b = { ask, };
    return b;

    function ask(question) {
        console.log(teacher, question)
    }
})("kyle");
a.ask("it's a module, right?");
// kyle it's a module, right?