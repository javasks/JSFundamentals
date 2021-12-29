

//This will block main thread(main call stack)
/* var s = "";
for(i=0;i<100000000000;i++){
    s += i + " ";    
}
console.log(s) */

console.log('Hi');
function greet(){
console.log('Welcome to Grandline');
}
greet();

