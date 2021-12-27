/*Palindrome Check
● Problem Statement: Check if the given integer N is a palindrome.
● Palindromes are numbers that read the same from left to right as from right to left.
● Examples - 121, 11, 3 etc.
● Probable Solution-1: By manually reversing the number.
*/
 //123/10= (10*12)+3
function reverse(N) {   //123
	let reverse = 0;
	while(N > 0) {       //123>0  true
		let digit = N % 10;   //123 %10  =3    2
		reverse = reverse * 10 + digit;  //reverse= 0*10 +3= 3*10+2=32 *10 +1=321
		N = Math.floor(N / 10);  //123/10=12
	}
	return reverse;
}
 
function isPalindrome(N) {
	let reversedNum = reverse(N);
	return reversedNum === N;
}
 
console.log(isPalindrome(1)); //true
console.log(isPalindrome(9)); //true
console.log(isPalindrome(22)); //true
console.log(isPalindrome(7227)); //true
console.log(isPalindrome(49694)); //true
console.log(isPalindrome(49664)); //false