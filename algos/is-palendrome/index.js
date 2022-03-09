/*A string is a palindrome if it is read the same from forward or backward. 
For example, dad reads the same either from forward or backward. So the word dad is a palindrome. 
Similarly, madam is also a palindrome.*/

/*
Approach 1:
First we iterate over a string in forward and backward direction.
Check if all forward and backward character matches, return true.
If all forward and backward character does not matches, return false.
If return is true, it is a palindrome.
*/

function isPalendrome(str){
	// Complete the function!
  // find the length of the string
  const len = str.length;
  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {
    // check each position
    // between the first and the last character
    if (str[i] !== str[len - 1 - i]) {
      return false
    }
  }
return true;  
}

/* if case insensitive
function palindrome(str) {
	var reg=/[\W_]/g;
	var smallStr = str.toLowerCase().replace(reg, "");
	var reversed=smallStr.split("").reverse().join("");
	if (reversed=== smallStr) return true;

	return false;
}
palindrome("racecar");
*/


function isPermutationPalendrome(str){
	// Complete the function!
	let charMap = new Map();
	for(let i=0; i <str.length; i++){
	  if(charMap.get(str[i])) {
		charMap.delete(str[i]);
	  } else {
		charMap.set(str[i], 1);
	  }
	}
	if(str.length%2 === 0 && charMap.size === 0 ||
	  str.length%2 === 1 && charMap.size === 1) {
	  return true;
	}
	return false;
}
module.exports = {isPalendrome, isPermutationPalendrome}











//===============================//java==========================
/*How to find if a string is a palindrome using Java? 
StringBuffer provides a method with name reverse() one way to check for a palindrome is

Create a StringBuffer object by passing the required string as a parameter to the constructor.
Reverse the contents of the object using the reverse() method.
Convert the StringBuffer object to Sting using the toString() method.
Now, compare the String and the reversed one, if true, the given string is a palindrome.
Example
Live Demo

public class StringPalindrome {
   public static void main(String args[]){

      String myString = "anna";
      StringBuffer buffer = new StringBuffer(myString);
      buffer.reverse();
      String data = buffer.toString();
      if(myString.equals(data)){
         System.out.println("Given String is palindrome");
      }else{
         System.out.println("Given String is not palindrome");
      }
   }
}


To verify whether the given string is a palindrome (using arrays)

Convert the given string into a character array using the toCharArray() method.
Make a copy of this array.
Reverse the array.
Compare the original array and the reversed array.
in case of match given string is a palindrome.
Example
import java.util.Arrays;
import java.util.Scanner;

public class Palindrome {
   public static void main(String args[]) {
      System.out.println("Enter a string ");
      Scanner sc = new Scanner(System.in);
      String s = sc.nextLine();
      char[] myArray = s.toCharArray();
      int size = myArray.length;
      char [] original = Arrays.copyOf(myArray,myArray.length);

      for (int i = 0; i < size / 2; i++) {
         char temp = myArray[i];
         myArray[i] = myArray[size-i-1];
         myArray[size-i-1] = temp;
      }
      System.out.println("Original Array"+Arrays.toString(original));
      System.out.println("Reverse Array"+Arrays.toString(myArray));

      if(Arrays.equals(myArray, original)) {
         System.out.println("Entered string is a palindrome");
      } else {
         System.out.println("Entered string is not a palindrome");
      }
   }
} */