function test(){
    function innerFunction(){
        var testVar=10
      //console.log(testVar)
    }
    //var testVar=10
    console.log(testVar)
    innerFunction()
}
//var testVar=10
//innerFunction()
test()
//console.log(testVar)


/* function test(){
//console.log(testVar)   //find in test local execution context
var testVar=20
//console.log(testVar)
innerFunc()
function innerFunc(){
    //var testVar=20
    console.log(testVar)
}
}
var testVar=20
test()
//console.log(testVar) */