/*1
2 3
4 5 6
7 8 9 10
…
● Problem Statement: Print the above pyramid pattern for N rows.
● To print the pyramid.
○ We need a loop to control the number of rows.
○ Inside each row, we need a loop to control the number of columns.
○ Hence, we require a nested loop structure.
○ Also, note that the ith row contains i columns!
*/
function pyramid(N) {
	let num = 1;
	for(let i = 1; i <= N; i++) {
		let output = '';
		for(let j = 1; j <= i; j++) {
			output = output + ' ' + num;
			num++;
		}
		console.log(output);
	}
}
 
pyramid(4);