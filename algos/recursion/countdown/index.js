function countdown(n){
    //Summary 
    /*String countdown starts from n ,at O replace with Liftoff!
    Join each string to the next separated by comma.

    //Example 
     if n=5
    countdown 5, 4, 3, 2, 1, 0 => 5, 4, 3, 2, 1, Liftoff!

*/
    //Approach

        if (n <=0 ) {
          return "Liftoff!"; //O(1)
        } else {
          
          return `${n}, ` +countdown(n-1); //O(n) //let newValue=n +"," + " " +countdown(n-1)
                                                          // return newValue
        }
      }

//O(n)
module.exports = countdown
