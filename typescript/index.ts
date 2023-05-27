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
function threeSum(nums: number[]): number[][] {
  const distinctNums = [...new Set(nums)];
  distinctNums.sort();

  const result = new Set();

  for (let i = 0; i < distinctNums.length; i++) {
    let num1 = distinctNums[i];
    let left = i == 0 ? 1 : 0;
    let right = distinctNums.length - 1;

    while (left < right) {
      const num2 = distinctNums[left];
      const num3 = distinctNums[right];
      const curr = num1 + num2 + num3;

      if (curr == 0) {
        const entry = [num1, num2, num3];
        entry.sort();
        if (!result.has(entry)) result.add(entry);
        break;
      } else if (curr < 0) {
        left += 1;
      } else {
        right -= 1;
      }
    }
  }
  console.log(result);

  return [];
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

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

// K number of most frequent element
function topKFrequent(nums: number[], k: number): number[] {
  const occurances = new Map<number, number>(); // Map<originalNumber, numberOfOccurances>
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if (occurances.has(curr)) {
      const prev = occurances.get(curr);
      occurances.set(curr, 1 + prev!);
    } else {
      occurances.set(curr, 1);
    }
  }

  const asArray = Array.from(occurances);
  asArray.sort((a, b) => {
    return b[1] - a[1];
  });

  return asArray.slice(0, k).map((x) => x[0]);
}

// valid palindrome
function isPalindrome(s: string): boolean {
  const filteredText = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const filteredTextAsArray = [...filteredText];
  filteredTextAsArray.reverse();
  return filteredText == filteredTextAsArray.join("");
}

// Best Time to Buy and Sell Stock
function maxProfit(prices: number[]): number {
  let left = 0;
  let right = 1;
  let maxProfit = 0;

  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      // profit
      let profit = prices[right] - prices[left];
      maxProfit = maxProfit < profit ? profit : maxProfit;
    } else {
      left = right;
    }
    right += 1;
  }

  return maxProfit;
}

// Product of Array Except Self
function productExceptSelf(nums: number[]): number[] {
  return [];
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
