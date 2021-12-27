/*
Create a program that accepts a number and check if it's Armstrong or not. A number is Armstrong, if the
sum of cubes of digits is the same as the number itself.
Sample input:
153
Output:
153 is Armstrong number
Explanation:
Extract each digit of the number and cube it and add it the sum. The final sum should be same as the
number.
153 = 1^3 + 5^3 + 3^3.
*/

 
// take an input
const number = prompt("Enter a positive integer");
const numberOfDigits = number.length;
let sum = 0;
 
// create a temporary variable
let temp = number;
 
while (temp > 0) {
 
    let remainder = temp % 10;
 
    sum += remainder ** numberOfDigits;
 
    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}
 
if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}
