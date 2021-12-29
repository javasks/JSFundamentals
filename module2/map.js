var myMap= new Map();

myMap.set(0,"abc")
myMap.set(1,"sandeep")
myMap.set(2,"Ankit")
myMap.set(3,"Shubham")
myMap.set(4,"xyz")

console.log(myMap)

 for(let key of myMap.keys()){
    console.log(`key is ${key}`)
}

for(let value of myMap.values()){
    console.log(`value is ${value}`)
}

//myMap.forEach((key)=>console.log(`${key}`))
myMap.forEach((key,value)=>console.log(`${key} and ${value}`))

//myMap.delete(2)