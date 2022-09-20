/* Closure is when a function "remember* its lexical scopes
    even when the function is executed outside the lexical scopes*/

function ask(question) {
    setTimeout(function waitSec() {
        console.log(question);
    }, 100);
}
ask("what is closure?");

function hey(question) {
    return function holdyourQuestion() {
        console.log(question);
    };
}
var myQuestion = hey("how are you?");
myQuestion();