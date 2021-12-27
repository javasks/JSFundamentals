//While loops are also called entry loops because the condition is checked before the loop control gets
//into the loop body.

/* while(i < 5) {
    console.log(i);
    i++;
    } */

/* while (condition)
statement  */  

let n = 0;
let x = 0;
while (n < 3) {  //0<3            1<3         2<3      3<3
  n++;           //0+1=1          1+1=2       2+1=3
  x =x + n;      //x=x+n=0+1=1    1+2=3       3+3=6
  console.log(x)
}

/* while (true) {
    console.log('Hello, world!');
  } */