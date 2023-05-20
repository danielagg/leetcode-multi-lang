// two-sum
function twoSum(nums: number[], target: number): number[] {
  const hashMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (hashMap.has(diff)) {
      return [hashMap.get(diff)!, i];
    }

    hashMap.set(nums[i], i);
  }

  return [];
}

// two-sum 2
function twoSum2(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const curr = numbers[left] + numbers[right];

    if (curr == target) return [left + 1, right + 1];

    if (curr < target) left++;
    else right--;
  }

  return [];
}

// two-sum 3

// move zeros
function moveZeroes(nums: number[]): void {
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] != 0) {
      // swap numbers
      const currLeft = nums[left];
      nums[left] = nums[right];
      nums[right] = currLeft;

      // next left place moves to right by 1
      left++;
    }
  }
}

// swap numbers in place
