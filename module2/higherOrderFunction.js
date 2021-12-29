const details= [
    {fName: "Sandeep", lName: "Singh", branch: "ECE"},
    {fName: "Ankit", lName: "Singh", branch: "CSE"},
    
];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  var arr=[1,2,3,4,5,6,7,8]
   
  /* for(let i=0;i<details.length;i++){
      console.log(details[i])
  } */  
  
  details.forEach(function(xyz){
      //console.log(xyz.lName)
  })
  
  
  // filter
  var arr=[1,2,3,4,5,6,7,8]
  for(let i = 0; i < arr.length; i++) {
       if(arr[i] < 5) {
        //console.log(arr[i]);
      }
    }

    //console.log(arr.filter((abc)=>abc<5))
//const result=arr.filter((num)=>num<5)
//console.log(result)  
  
  // map
  var otherArray=[1,2,3,4,5,6,7,8]
  var newArray=otherArray.map(function(xyz){
      return xyz*xyz
  })

  console.log(newArray)
  /* var mapArry=arr.map(function(value){
      return value*value
  })
  console.log(mapArry) */

  

  
  