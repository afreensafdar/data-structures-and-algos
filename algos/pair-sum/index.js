function pairSum(arr, sum){
	// Complete the function!
	//O(n^2)
	for(let i = 0; i < arr.length - 1; i++){
		for(let j = i + 1; j < arr.length; j++){
			if(arr[i] + arr[j] == sum){
				return true
			}
		}
	}
	return false
}

//====Dan Approach================
/* 
// Optimized verison O(n)
function pairSum(arr, sum){
	let leftIdx = 0;
	let rightIdx = arr.length - 1;
	let left, right;
	while(leftIdx < rightIdx){
		left = arr[leftIdx];
		right = arr[rightIdx];

		if(left + right === sum){
			return true
		} else if(left + right < sum){
			leftIdx++
		} else {
			rightIdx--
		}
	}
	return false;
}

*/

module.exports = pairSum

