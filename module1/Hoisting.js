/* Undefined and 
not defined are not same
Default Behaviour of moving all 
the declaration at the top of the scope before code execution */

//test();
console.log(a);
//console.log(test); 

//var a=4;

function test(){
    var a=4;
    console.log("hello world")
}
 /* test();
console.log(a);
console.log(test); */