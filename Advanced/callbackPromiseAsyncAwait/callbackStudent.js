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

function enroll(detail,callBack){

    setTimeout(()=>{
        studetails.push(detail)
        callBack()
    },1000)

}

/* function enroll(detail){

    setTimeout(()=>{
        studetails.push(detail)
    },500)

} */

getDetails()
enroll({fName: "Rahul", lName: "Singh", branch: "IT"},getDetails)