var workshop = {
    teacher: "abdul",
    ask(question) {
        console.log(this.teacher, question);
    },
}
workshop.ask("what is implicit binding?");
/* this: dynamic -> sharing */
function hey(question) {
    console.log(this.teacher, question);
}
var workshop1 = {
    teacher: "rashu",
    hey: hey,
};
var workshop2 = {
    teacher: "suzy",
    hey: hey,
};
workshop1.hey("how do i share a method?");
workshop2.hey("how are you?");


// Explicit binding 
// call, apply, bind.


// call 

const y = {
        fname: "abdul",
        lname: "rashid",
        branch: function(rating) {
            console.log(`my name is ${this.fname} ${this.lname} i will love to give ${rating} star.`);
        }
    }
    //y.branch(5);

const z = {
    fname: "rasim",
    lname: "chhimpa"
}
y.branch.call(z, 5);


// apply 

const k = {
        fname: "Html",
        lname: "Css",
        branch: function(rating) {
            console.log(`my name is ${this.fname} ${this.lname} i will love to give ${rating} star.`);
        }
    }
    //y.branch(5);

const l = {
    fname: "anshu",
    lname: "soni"
}
k.branch.apply(l, [5]);

// more example for apply

let max = Math.max(1, 2, 3, 5);
console.log(max);

let min = Math.min(1, 2, 3, 5);
console.log(min);

// The apply() method is similar to call() method.
// The call() method takes argument separately.
// The apply() method takes argument as an array.

// bind
// by this method , we can object to a common function ,so that the function gives different result when its need.
// the bind() method takes an object as an first argument and create a new function.

const i = {
    fname: "abdul",
    lname: "rashid"
}

const i1 = {
    fname: "abdul1",
    lname: "rashid1"
}

const i2 = {
    fname: "abdul2",
    lname: "rashid2"
}

function some() {
    console.log(`my fav name is ${this.fname} ${this.lname}`);
}
let s = some.bind(i);
s();