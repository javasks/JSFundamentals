function test() {
    var testVar = 20
    //return function innerFunc() {
    function innerFunc() {
        testVar=30
        console.log(testVar)
    }
    
    return innerFunc
}

var testVar = test()
//console.log(testVar)
testVar()
