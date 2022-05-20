function printAll(numbers){
    for(var i=0;i<numbers.length;i++){
        console.log(numbers[i]);
    }
}
function ForEach(numbers,myCallbackFunction){
    myCallbackFunction(numbers);
}
ForEach([7,5,4,32],printAll);