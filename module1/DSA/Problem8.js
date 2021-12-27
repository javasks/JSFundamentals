/* 1
1 2
1 2 3
1 2 3 4
…
● Problem Statement: Print the above pyramid pattern for N
rows.
● To print the pyramid.
○ We need a loop to control the number of rows.
○ Inside each row, we need a loop to control the number
of columns.
○ Hence, we require a nested loop structure.
○ Also, note that the ith row contains i columns! The
elements to be printed are same as the value of the
loop j in every iteration of ith loop */

function pyramid(N) {
    let num = 1;
    for(let i = 1; i <= N;
    i++) {
    let output = '';
    for(let j = 1; j <= i;
    j++) {
    output = output + ' ' + j;
    }
    console.log(output);
    }
    }
    pyramid(4);