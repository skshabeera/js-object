d1 = {'a': 100, 'b': 200, 'c':300}
d2 = {'a': 300, 'b': 200, 'd':400}
d3={}
for (var i in d1){
    for (var X in d2)
    if (i==X){
        d3[i]=d1[i]+d2[X]
}
}
d3[i]=d1[i]
d3[X]=d2[X]
console.log(d3)