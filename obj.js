let m=require("readline-sync")
var n=m.question("enter the string")
let a=require("readline-sync")
var b=a.question("enter the number")
var c=0
dict={}
p=n.split(" ")
for (i of p){
    if (i.includes(b)){
        c=c+1
        dict[b]=c
    }
}
console.log(dict)
