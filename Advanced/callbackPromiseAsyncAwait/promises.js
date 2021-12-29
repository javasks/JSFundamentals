const studetails= [
    {fName: "Sandeep", lName: "Singh", branch: "ECE"},
    {fName: "Ankit", lName: "Singh", branch: "CSE"},
    
];

function getDetails(){
    setTimeout(()=>{
        let output=''
        studetails.forEach((details,index)=>{
            output+=`<li>${details.fName}</li>`
        })
document.body.innerHTML=output
    },1000)
}

function enroll(detail){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            studetails.push(detail)
            //const error=true
            const error=false
            if(!error){
                resolve()
            }else{
                reject('Error')
            }
        },1000)
    })   
}

getDetails()
enroll({fName: "Rahul", 
    lName: "Singh", 
    branch: "IT"})
    .then(getDetails)
    .catch(error=>console.log(error))



 const promise1=Promise.resolve('Welcome to Promise1') 
 const promise2= new Promise((resolve,reject)=>{
     setTimeout(resolve,2000,'hello to promise2')
 })
 const promise3=fetch('https://jsonplaceholder.typicode.com/todos/1')
 .then(response => response.json())
 

 Promise.all([promise1,promise2,promise3]).then(val=>console.log(val))