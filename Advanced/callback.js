setTimeout(function(){
    console.log("in setTimeout")
},1000)


function test(callBack){
console.log("in called back function")
callBack()
}

/* test(function callBackFunction()
{console.log("in call back function")}) */

test(
    ()=>{console.log("in call back function")}
    )
