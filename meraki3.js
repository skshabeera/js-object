var mainString="My name is kumar, and my friend’s name is Dhamu" 
var subString="is"
b=mainString.split(" ")
var count=0
for (i in b){
    if (b[i]===subString){
        count=count+1
    }
}
console.log(count)