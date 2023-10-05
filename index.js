function hasTargetSum(array, target) {
  // iterate thro each number in the array
  for (let i = 0; i < array.length; i++) {
// for the current num, identify a compliment that adds to the target (comp = target - num)
      const complement = target - array[i];
      // iterate thro the rest of the array
      for (let j = i + 1; j < array.length; j++) {
         // check if any number is our compliment
  // if so return true
          if (array[j] === complement) return true
      }
  }
return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  hasTargetSum([22, 19, 4, 6, 30], 25)
  iterate thro each number in the array
  for the current num, identify a compliment that adds to the target (comp = target - num)
  iterate thro the rest of the array
  check if any number is our compliment
  if so return true
*/

/*
  Add written explanation of your solution here
  make a function that checks if 2 numbers from the array add up to some target
  [1,2,3,4] target 6
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
