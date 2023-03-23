function twoSum_idea1(nums: number[], target: number): number[] {
  const dict: Map<number, number> = new Map();

  for (let index = 0; index < nums.length; index++) {
    const currentTarget = target - nums[index];

    if (dict.has(currentTarget)) {
      return [dict.get(currentTarget)!, index];
    }

    dict.set(nums[index], index);
  }

  return [];
}

function twoSum_idea2(nums: number[], target: number): number[] {
  const dict: { [key: number]: number } = {};

  for (let index = 0; index < nums.length; index++) {
    const currentTarget = target - nums[index];

    if (dict[currentTarget] !== undefined) {
      return [dict[currentTarget], index];
    }

    dict[nums[index]] = index;
  }

  return [];
}

console.log(twoSum_idea1([2, 7, 11, 15], 9)); // 0, 1: nums[0] + nums[1] == 9
console.log(twoSum_idea1([3, 2, 4], 6)); // 1, 2
console.log(twoSum_idea1([1, 2, 3, 5], 5)); // 2, 3

console.log(twoSum_idea2([2, 7, 11, 15], 9)); // 0, 1: nums[0] + nums[1] == 9
console.log(twoSum_idea2([3, 2, 4], 6)); // 1, 2
console.log(twoSum_idea2([1, 2, 3, 5], 5)); // 2, 3
