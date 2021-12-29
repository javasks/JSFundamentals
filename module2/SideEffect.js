/* function addRandomNumber(a,b){
     const sum=a+b+Math.random()
    return sum
}

console.log(addRandomNumber(2,3)) */

 let count=0;
function printNumber(){
count=count+1
console.log(count)
}
//setInterval(function(){printNumber()},2000)

setInterval(function(){printNumber()},5000)
