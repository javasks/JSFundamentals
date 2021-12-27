/*
Take three numbers from the user and 
print the largest of them.
Explanation:
Compare between 2 variables and store the higher in max and then compare that with the third to find the
actual max.
input
1, 2, 3
output
3
*/
function max_of_three(x, y, z) 
 {
  max_val = 0;
  if (x > y)
  {
    max_val = x;
  } else
  {
    max_val = y;
  }
  if (z > max_val) 
  {
    max_val = z;
  }
  return max_val;
}
 
console.log(max_of_three(1,0,1));
console.log(max_of_three(0,-10,-20));
console.log(max_of_three(1000,510,440));