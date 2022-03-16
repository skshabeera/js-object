var my_dict = { 'a':50, 'b':58, 'c':56, 'd':40, 'e':100, 'f':20 }
var max1=0
var max2=0
var max3=0
for(var i in my_dict){
    for(var j in my_dict){
        if (my_dict[j]>max1){
            max1=my_dict[j]
        }
        else if (my_dict[j]<max1 && my_dict[j]>max2){
            max2=my_dict[j]
        }
        else if (my_dict[j]<max1&&my_dict[j]<max2&&my_dict[j]>max3){
            max3=my_dict[j]

        }
    }
}
console.log(max1)
console.log(max2)
console.log(max3)
