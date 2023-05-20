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
function swapNumbers(): void {
  let a = 1;
  let b = 2;

  [b, a] = [a, b];
}

// contains duplicate
function containsDuplicate(nums: number[]): boolean {
  const numsAsSet = new Set(nums);
  return nums.length != numsAsSet.size;
}

// is anagram
function isAnagram(s: string, t: string): boolean {
  // const sortedS = Array.from(s).sort();
  // const sortedT = Array.from(t).sort();

  // return sortedS.join() == sortedT.join();
  return [...s].sort().join() == [...t].sort().join();
}

// group anagrams
function groupAnagrams(strs: string[]): string[][] {
  const anagrams = new Map<string, string[]>(); // Map<sorted, originals[]>

  for (let current of strs) {
    const currentSorted = [...current].sort().join();
    if (anagrams.has(currentSorted)) {
      const prev = anagrams.get(currentSorted)!;
      anagrams.set(currentSorted, [...prev, current]);
    } else {
      anagrams.set(currentSorted, [current]);
    }
  }

  return Array.from(anagrams).map((x) => x[1]);
}
