 //Start->Conditional code->True -goback else End
 //Iteration statement (For, while, do-while )
 //Jump Statement (Break, continue and return)
 /* num=9;
if(num % 2 === 0){
  console.log("even")
}  //9%2=1 not equal to zero

else{
  console.log("odd") 
  console.log("inside else block")
}
  
 */
//if(num % 2 !== 0)


/* num=3;
if(num % 2 === 0)
console.log("even")
else
console.log("odd") */

 /* num=4;
f1();
function f1() {
    if(num % 2 === 0)
    if(num === 4)
    console.log("hello")
    }  */


function testNum(a) {
    let result;
    if (a > 0) {
      result = 'positive';
    } else if(a==0){
      result = 'Zero';
    } else result='Negative Number'
    return result;
  }
  
  console.log(testNum(9));
  // expected output: "NOT positive"
   