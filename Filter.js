function lowerThanTen(numbers){
    result=[];
    for(var i=0;i<numbers.length;i++){
        if(numbers[i]<10){
            result.push(numbers[i]);
        }
    }
    return result;
}
function Even(numbers){
    result=[];
    for(var i=0;i<numbers.length;i++){
        if(numbers[i]%2==0){
            result.push(numbers[i]);
        }
    }
    return result;
}
function myFilter(numbers,myCallbackFunction){
    numbers=myCallbackFunction(numbers);
    return numbers;
}
console.log(myFilter([1,8,11,5,18],lowerThanTen));
console.log(myFilter([1,8,11,5,18],Even));