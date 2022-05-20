function square(numbers){
    var result=[];
    for(var i=0;i<numbers.length;i++){
        result.push(numbers[i]*numbers[i]);
    }
    return result;
}
function addThree(numbers){
    var result=[];
    for(var i=0;i<numbers.length;i++){
        result.push(numbers[i]+3);
    }
    return result;
}
function myMap(numbers,myCallbackFunction){
    numbers=myCallbackFunction(numbers);
    return numbers;
}
console.log(myMap([1,2,3],square));
console.log(myMap([1,2,3],addThree));