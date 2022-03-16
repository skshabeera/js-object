dict=[ {"first":1}, {"second": 2}, {"third": 1}, {"four": 5}, {"five":5}, {"six":6 }, {"seven":7} ]
var  array =[]
for(var i of dict){
    for (var j in i){
        if (!(array.includes(i[j]))){
            array.push(i[j])
        }

    }
}
console.log(array)