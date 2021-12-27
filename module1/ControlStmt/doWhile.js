/* Do while loops are also called exit controlled loops because the condition is checked after the
loop body executes. So, if the condition expression evaluates to false for the first iteration the
do-while loop will at least execute once. */
/* 
Do-while loops can be used if the number of times we need to execute the loop is not known
before, and the loop should execute at least once. */
/* do
  statement
while (condition); */

let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
