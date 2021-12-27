/*
Jot down a program that asks the user to provide a single character. Print Vowel or Consonant, depending
upon the users' input. If the input is not a letter (from a and z or A and Z) or is a string of length > 1, print an
error message.
Explanation:
● Take input of a character.
● Check if it is a,e,i,o,u or not. Then print vowel.
● Else print consonant
input output
'a' vowel
*/

function inputCheck(){
    var ch= window.prompt("Enter your input: ");
     
    if((ch>='a' && ch<='z') || (ch>='A' && ch<='Z'))
    {
      if(ch==='a' || ch==='e' || ch==='i' || ch==='o' || ch==='u')
        console.log("Vowel");
      else if(ch==='A' || ch==='E' || ch==='I' || ch==='O' || ch==='U')
        console.log("Vowel");
      else
            console.log("Consonant");
    }
    else
          console.log("neither Vowel nor Consonant")
    }

    inputCheck();