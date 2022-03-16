
let n=require("readline-sync")
m=n.question("enter the user")
dict={"name":"Raju", "marks":56}
if (dict.hasOwnProperty(m)){
    console.log("yes")
}
else{
    console.log("no")
}

