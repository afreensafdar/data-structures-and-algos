function pairSum(arr, sum){
	// Complete the function!
	
	for(let i = 0; i < arr.length - 1; i++){
		for(let j = i + 1; j < arr.length; j++){
			if(arr[i] + arr[j] == sum){
				return true
			}
		}
	}
	return false
}


module.exports = pairSum

//Time Complexity: O(n2) 
//Auxiliary Space: O(1)