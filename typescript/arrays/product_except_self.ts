function productExceptSelf(nums: number[]): number[] {
  const prefixSum: number[] = Array(nums.length).fill(1);
  const postfixSum: number[] = [];

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (index == 0) {
      prefixSum[index] = element;
    } else {
      prefixSum[index] = prefixSum[index - 1] * element;
    }
  }

  for (let index = nums.length - 1; index >= 0; index--) {
    const element = nums[index];
    if (index == nums.length - 1) {
      postfixSum[index] = element;
    } else {
      postfixSum[index] = postfixSum[index + 1] * element;
    }
  }

  return nums.map((_, index) => {
    const currentPrefixSum = index == 0 ? 1 : prefixSum[index - 1];
    const currentPostfixSum =
      index == nums.length - 1 ? 1 : postfixSum[index + 1];

    return currentPrefixSum * currentPostfixSum;
  });
}

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
