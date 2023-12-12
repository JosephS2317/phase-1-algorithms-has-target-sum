function hasTargetSum(array, target) {
  for(let startIndex = 0; startIndex < Math.floor(array.length / 2) ; startIndex++){
   for(let endIndex = startIndex + 1 ; endIndex < array.length ; endIndex++){
    if(array[startIndex] + array[endIndex] === target){
      return true
    }
   }
  }
  return false
}



/* 
  Write the Big O time complexity of your function here
O(n^2)
*/

/* 
  Add your pseudocode here
starting from each end of the array. if the those values added equal dont equal the target
the function returns false. otherwise it returns true.
*/

/*
  Add written explanation of your solution here
  We start with the first index of the array, we then say that that it should be less then
  whatever half the total number of 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
