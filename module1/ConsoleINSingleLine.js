var one = "Sandeep"
  var two = "Sandy"
  var three = "Hello"

  var concatString = one + ", " + two + ", " + three
  
  console.log(concatString) // "1, 2, 3"
  console.log(one + ", " + two + ", " + three) // "1, 2, 3"

  var array = ["Sandeep", "Sandy", "Hello"];
  var string = "";
  array.forEach(function(element){
            //string +=","+ element;
            string += element +",";
  });
  console.log(string); //123
  
  const a1 ="Sandeep";
  const b1="Singh";
  console.log(`${a1}`+","+`${b1}`)
  //console.log(b1)
  var array = [];
    for(var i = 1; i <= 3; i++)
    {
       array.push(i);
    }
    console.log(array.join(','));

//Spread Operator
    var array = ['a', 'b', 'c'];
    console.log(...array);

 //Simple For loop
 var s = "";
for(i=0;i<10;i++){
    s += i + " ";    
}
console.log(s)   