import { name, ask } from './file1.js';
console.log(name);
// import { sname } from './file1.js';
// console.log(sname);
import { a } from './file1.js';
console.log(a());

import { b } from './file1.js';
console.log(b(10, 20));


import { c } from './file1.js';
console.log(c(100, 20));

import { hello as h } from './file1.js';
console.log(h);
// let hello as declared hello name and as declare a short name .
// 'hello as h'.console.log(hello) hello are replace h.console.log(h);

import { default as df } from './file1.js';
console.log(df());

import { default as tg } from './file1.js';
console.log(tg());