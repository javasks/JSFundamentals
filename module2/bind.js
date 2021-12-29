const details={
    fName:"Sandeep",
    lNmae:"Singh",
    branch:"ECE",
    /* getDetails:function(){
        console.log(this.fName+':::::::'+this.lNmae)
    } */
}

const ankitDetails={
    fName:"Ankit",
    lNmae:"Singh",
    branch:"CSE",
     getDetails:function(){
        console.log(this.fName+':::::::'+this.lNmae)
    } 
}

let getDetails=function (){
    console.log(this.fName+':::::::'+this.lNmae+':::::'+this.branch)
}
//details.getDetails
//getDetails.call(details)
//getDetails.call(ankitDetails)

let bindVar=getDetails.bind(ankitDetails)
//console.log(bindVar)
bindVar()

//details.getDetails()
//getDetails.call(details)
/* let bindVar=getDetails.bind(details) //returns copy of method after binding
console.log(bindVar)
bindVar() */