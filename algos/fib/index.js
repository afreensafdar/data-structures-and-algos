function factorial(n){
//base case
if(n <= 1){
    return 1
} else { //recursive case
    return n * factorial(n-1)
}
}

// n! => n * n - 1 * n - 2 * n - 3.... 3 * 2 * 1

console.log('**', factorial(1)) //should be 1
console.log('**', factorial(3)) //should be 6
console.log('**', factorial(4)) //should be 24