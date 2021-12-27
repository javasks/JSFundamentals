
/* say()
say1() */
//Function Declaration:
function say(){
    console.log("say")
}

const say1=function say(){
    console.log("say")
}


//================================================================

//Function Expression
var say1=function (){
    console.log("say1")
}
say()
say1()
//===============================================================

//Named Function expersion
var say2=function say3(){
    console.log("say2")
}
say2()
//say3()
//=========================================================
//fist class function:pass as argument and return as function
function say5(name){
    console.log("say5")
}
say5(function(){}

)
//================================================
//Arrow Function
//let test = prompt("What is your name?");
/* const sayHe=function (name){
    console.log("Hello "+ name)
    console.log(`Hello ${name}`)
    console.log("Hello,",name)
    
    }
sayHe('test'); */

//first step: Remove function
//second step: add => bw::: (){}
const sayHe=  (name) => `hello ${name}`
console.log(sayHe('dude'));

const sayhe= (xyz)=> xyz*xyz;




//arrow function
const sayHelloSmall=  (name)=> `hello big ${name}`
    console.log(sayHelloSmall('bro'))
