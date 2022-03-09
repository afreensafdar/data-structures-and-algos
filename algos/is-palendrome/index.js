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

