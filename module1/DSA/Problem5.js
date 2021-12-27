/*
Problem Statement: Given an integer num, check if it is a prime number.
● A prime number is a number that is divisible by itself and 1.
● Probable Solution-1: Counting the number of factors.
● If the number of factors is exactly 2, then the number has to be a prime number.
Code is shared below
input - 5
output - Number is prime
*/

function f1(n) {
    let isPrime = true;
    for(let i = 2; i < n; i++) {
    if(n % i == 0) {
    isPrime = false;
    break;
    }
    }
    if(isPrime === true)
    console.log("Number is prime")
    else
    console.log("Number is NOT prime")
    }
    f1(3)