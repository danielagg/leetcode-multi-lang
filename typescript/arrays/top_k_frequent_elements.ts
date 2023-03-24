function topKFrequent(nums: number[], k: number): number[] {
  const result: { key: number; occurances: number }[] = [];

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    const resultEntry = result.filter((x) => x.key == element);

    if (resultEntry.length == 0) {
      result.push({ key: element, occurances: 1 });
    } else {
      resultEntry[0].occurances += 1;
    }
  }

  result.sort((a, b) => b.occurances - a.occurances);

  return result.map((x) => x.key).slice(0, k);
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1,2]
