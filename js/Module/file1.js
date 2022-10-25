export let name = "abdul";
//  let sname = "rashid";
export function ask() {
    console.log("function as  called.....");
}

// without export keyword doesn't use a variable, function ....etc.
// withouut export keyword use a variable doesn't call a variable as given a syntex error .
// import keyword as use the variable value ,function ..etc.

export const a = () => {
    console.log("how are you?");
}

// Normal function
export let b = function hey(a, b) {
    return a + b;
}


// Arrow function
export let c = (a, b) => {
    return a + b;
}

export let hello = "HTML and CSS";

// default function
/* export default function() {
    console.log("defalut function called....");
} */

// arrow default function

export default () => {
    console.log("Arrow default function called....");
}