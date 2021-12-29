function getProduct(...input){
    let product=1;
    for(let item of input){
        product=product*item
    }
    return product
}

//console.log(getProduct(1,2))
console.log(getProduct(1,2,3,4))
//console.log(getProduct(1,2,3,4,5,6,7,8))