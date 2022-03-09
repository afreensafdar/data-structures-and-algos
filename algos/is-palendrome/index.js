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


//====Dan Approach ======
/*function isPalendrome(str){
	let first, last;
	while(str.length > 1){
		first = str[0];
		last = str[str.length - 1];
		if(first != last) return false
		str = str.slice(1, str.length - 1)
	}
	return true
} */

function isPermutationPalendrome(str){
  // Complete the function!
  	/*
	SUMMARY
		Permutation == every possible order of letters
		'abc' => 'acb', 'bca', 'bac', 'cba', 'cab'
		Can we arrange the letters of a word to make it a palendrome?
	
	EXAMPLES
	racecar => true
	{r: 2, a : 2, c : 2, e: 1} odds: 1
	rrcceea => true (racecar)
	{r: 2, a : 2, c : 2, e: 1} odds: 1
	eepp => true (peep)
	{e: 2, p:2} odds: 0
	dog => false
	{d:1, o: 1, g:1} odds: 3
	man => false
	{m:1, a: 1, n:1} odds: 3
	tag => false
	{t:1, a: 1, g:1} odds: 3
	APPROACH
	Count all the letters in the word
	Count the # of odd counted-letters
	Return if odds <= 1 
	*/
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


//====Dan Approach ======
/*const counts  = {};
	let odds = 0;

	for(let i = 0; i < str.length; i++){
		let char = str[i];
		if(counts.hasOwnProperty(char)){
			counts[char] += 1
		} else {
			counts[char] = 1
		}
	}

	for(let key in counts){
		if(counts[key] % 2 != 0){
			odds++
		}
	}

	return odds <= 1
 */


