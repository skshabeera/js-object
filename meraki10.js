// var n=require("readline-sync")
// var d={}
// for(var i=0;i<10;i++){
// var name=n.question("enter the question")
// var marks=n.question("enter the question")
// d[name]=marks
// }
// console.log(d)
var readline = require('readline-sync');
var students={}
for (let step = 0; step <5; step++){
var name =readline.question("Enter your name:");
var marks=readline.questionInt("Enter the marks");
students[name]=marks;
}
console.log(students);