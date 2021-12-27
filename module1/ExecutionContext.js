
/*Execution Context
Global and local execution context
1)Memory creation ->variable environment 
     (Key:value-->a=1,fun{})
2)Code Execution->Line by line and single threaded*/

//when we run java script execution context is created
//Windows and this object-> JS engine will create the global object in Global execution context
var b;
console.log(b)  //undefined
function add(num1,num2){
    console.log(num1)
    console.log(num2)
var sum=num1+num2;
console.log(sum);
return sum;
}
b= add(2,3); //calling the function
console.log(b);

