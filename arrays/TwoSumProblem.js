// Given an array of numbers and a target, return the indices of the two numbers that add up to the target.

function twoSum(nums, target) {
  const previousValues = {};

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const neededValue = target - currentNumber;

    if (previousValues[neededValue] !== undefined) {
      return [previousValues[neededValue], i];
    }
    
    previousValues[currentNumber] = i;
  }
}

console.log(twoSum([3, 2, 4], 6));