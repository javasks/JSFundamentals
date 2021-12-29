const studetails = [
    { fName: "Sandeep", lName: "Singh", branch: "ECE" },
    { fName: "Ankit", lName: "Singh", branch: "CSE" },

];

function getDetails() {
    setTimeout(() => {
        let output = ''
        studetails.forEach((details, index) => {
            output += `<li>${details.fName}</li>`
        })
        document.body.innerHTML = output
    }, 1000)
}

function enroll(detail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            studetails.push(detail)
            //const error=true
            const error = false
            if (!error) {
                resolve()
            } else {
                reject('Error')
            }
        }, 1000)
    })
}

async function test() {
    await enroll({
        fName: "Rahul",
        lName: "Singh",
        branch: "IT"
    })
    getDetails()
}
test()

async function fetchDetails(){
    const response=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const details= await response.json()
    console.log(details)
}
fetchDetails()
