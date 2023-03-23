function containsDuplicate_idea1(nums: number[]): boolean {
  const found = new Set<number>();

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    if (found.has(element)) return true;

    found.add(element);
  }

  return false;
}

function containsDuplicate_idea2(nums: number[]): boolean {
  return new Set<number>(nums).size < nums.length;
}

console.log(containsDuplicate_idea1([1, 2, 3, 4, 5]));
console.log(containsDuplicate_idea1([1, 2, 3, 4, 4, 5]));

console.log(containsDuplicate_idea2([1, 2, 3, 4, 5]));
console.log(containsDuplicate_idea2([1, 2, 3, 4, 4, 5]));
