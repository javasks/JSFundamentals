/*
A school has the following rules for the grading system:
A. Below 25 - F
B. 25 to 45 - E
C. 45 to 50 - D
D. 50 to 60 - C
E. 60 to 80 - B
F. Above 80 - A
Ask the user to enter marks and print the corresponding grade.
input output
85 A
Explanation:
Take marks as input and check the range of marks. Based on the range of the marks assign it a grade as given in the question.
*/

function printGrade(){
    var marks= window.prompt("Enter the marks: ");
     
        if(marks<25){
          console.log("F");
        }
        else if((marks>=25)&&(marks<45)){
          console.log("E");
        }
        else if((marks>=45)&&(marks<50)){
         console.log("D");
        }
        else if((marks>=50)&&(marks<60)){
         console.log("C");
        }
        else if((marks>=60)&&(marks<80)){
         console.log("B");
        }
        else if((marks>=80)&&(marks<=100)){
          console.log("A");
        }
        else{
          console.log("Not correct marks");
        }
      }
    