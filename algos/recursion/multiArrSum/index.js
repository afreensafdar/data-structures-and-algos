function multiDimSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
      if(typeof arr[i] == 'number'){ //Base Case
        sum += arr[i]
      } else { // Recursive Case
        sum += multiDimSum(arr[i])
      }
    }
    return sum
  }


module.exports = multiDimSum