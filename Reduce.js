function sumAll(numbers){
    var s=0;
    for(var i=0;i<numbers.length;i++){
        s=s+numbers[i];
    }
    return s;
}
function subAll(numbers){
    var s=numbers[0];
    for(i=1;i<numbers.length;i++){
        s=s-numbers[i];
    }
    return s;
}
function myReduce(numbers,myCallbackFunction){
    var s=myCallbackFunction(numbers);
    return s;
}
console.log(myReduce([7,52,9,74],sumAll));
console.log(myReduce([7,52,9,74],subAll));