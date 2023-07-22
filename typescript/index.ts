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
      let profit = prices[right] - prices[left];
      maxProfit = maxProfit < profit ? profit : maxProfit;
    } else {
      left = right;
    }
    right += 1;
  }

  return maxProfit;
}

function isParenthesisValid(s: string): boolean {
  let stack: string[] = [];

  for (let curr of s.split("")) {
    if (curr == "(" || curr == "[" || curr == "{") {
      stack.push(curr);
      continue;
    }

    if (stack.length == 0) return false;

    const last = stack.pop()!;

    if (curr == ")" && last !== "(") return false;
    if (curr == "]" && last !== "[") return false;
    if (curr == "}" && last !== "{") return false;
  }

  return stack.length == 0;
}

class MinStack {
  values: number[];

  constructor() {
    this.values = [];
  }

  push(val: number): void {
    this.values.push(val);
  }

  pop(): void {
    this.values.pop();
  }

  top(): number {
    return this.values.pop()!;
  }

  getMin(): number {
    return Math.min(...this.values);
  }
}

function evaluateReversePolishNotation(tokens: string[]): number {
  const stack: number[] = [];
  const operands = ["+", "-", "*", "/"];

  for (let i = 0; i < tokens.length; i++) {
    const curr = tokens[i];

    if (operands.indexOf(curr) === -1) {
      stack.push(Number(curr));
      continue;
    }

    const num1 = stack.pop()!;
    const num2 = stack.pop()!;

    switch (curr) {
      case "+":
        stack.push(num2 + num1);
        break;
      case "-":
        stack.push(num2 - num1);
        break;
      case "*":
        stack.push(num2 * num1);
        break;
      case "/":
        stack.push(Math.floor(num2 / num1));
        break;
    }
  }

  return stack.pop()!;
}

function generateParenthesis(n: number): string[] {
  const result: string[] = [];
  let currentEntry: string[] = [];

  const backTrack = (numberOfOpen: number, numberOfClosed: number) => {
    if (numberOfOpen === numberOfClosed && numberOfOpen === n) {
      result.push(currentEntry.join(""));
      return;
    }

    if (numberOfOpen < n) {
      currentEntry.push("(");
      backTrack(numberOfOpen + 1, numberOfClosed);
      currentEntry.pop();
    }

    if (numberOfClosed < numberOfOpen) {
      currentEntry.push(")");
      backTrack(numberOfOpen, numberOfClosed + 1);
      currentEntry.pop();
    }
  };

  backTrack(0, 0);

  return result;
}

function dailyTemperatures(temperatures: number[]): number[] {
  const result: { index: number; waitDays: number }[] = [];
  const stack: { index: number; temperature: number }[] = [
    { index: 0, temperature: temperatures[0] },
  ];

  for (let i = 1; i < temperatures.length; i++) {
    const curr = temperatures[i];

    if (stack.length && stack[stack.length - 1].temperature < curr) {
      const resToAdd = stack.pop()!;
      result.push({ index: resToAdd.index, waitDays: i - resToAdd.index });
    } else {
      stack.push({ index: i, temperature: curr });
    }

    console.log(stack);
  }

  return [];
}

function dailyTemperatures2(temperatures: number[]): number[] {
  let tempRes: { temperature: number; index: number; waitDay: number }[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    tempRes.push({ temperature: temperatures[i], index: i, waitDay: 0 });

    const currentTemperature = temperatures[i];
    if (i > 0) {
      const toAlign = tempRes
        .filter((x) => x.waitDay == 0 && x.temperature < currentTemperature)
        .map((x) => {
          return {
            temperature: x.temperature,
            index: x.index,
            waitDay: i - x.index,
          };
        });

      const unTouched = tempRes.filter(
        (x) => toAlign.map((xx) => xx.index).indexOf(x.index) == -1
      );

      if (toAlign.length > 0) {
        tempRes = [...unTouched, ...toAlign];
      }
    }
  }

  tempRes.sort((a, b) => a.index - b.index);
  return tempRes.map((x) => x.waitDay);
}

function lengthOfLongestSubstring(s: string): number {
  let alreadyFound = new Set<string>();
  let left = 0;
  let result = 0;

  for (let right = 0; right < s.length; right++) {
    let curr = s[right];
    while (alreadyFound.has(curr)) {
      alreadyFound.delete(s[left]);
      left += 1;
    }
    alreadyFound.add(curr);

    result = result > alreadyFound.size ? result : alreadyFound.size;
  }

  return result;
}

function reverseStringRecursively(s: string): string {
  const rev = (curr: string): string => {
    if (curr == "") return "";
    return curr[curr.length - 1] + rev(curr.slice(0, curr.length - 1));
  };

  return rev(s);
}

function binarySearch(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] == target) return mid;

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let newHead: ListNode | null = head;
  let newNext: ListNode | null = null;

  while (newHead != null) {
    newNext = new ListNode(newHead.val, newNext);
    newHead = newHead.next;
  }

  return newNext;
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (list1 == null && list2 == null) return null;
  if (list1 != null && list2 == null) return list1;
  if (list1 == null && list2 != null) return list2;

  let result: ListNode | null = null;
  let resultHead: ListNode | null = null;

  if (list1!.val <= list2!.val) {
    result = list1;
    list1 = list1!.next;
  } else {
    result = list2;
    list2 = list2!.next;
  }

  resultHead = result;

  while (list1 != null || list2 != null) {
    if (list1 != null && list2 == null) {
      result!.next = list1;
      list1 = list1.next;
    } else if (list1 == null && list2 != null) {
      result!.next = list2;
      list2 = list2.next;
    } else {
      if (list1!.val <= list2!.val) {
        result!.next = list1;
        list1 = list1!.next;
      } else {
        result!.next = list2;
        list2 = list2!.next;
      }
    }

    result = result!.next;
  }

  return resultHead;
}

function sortList(head: ListNode | null): ListNode | null {
  if (head == null) return head;

  const nums: number[] = [];

  while (head != null) {
    nums.push(head!.val);
    head = head!.next;
  }

  nums.sort((a, b) => a - b);

  let result = new ListNode(nums.shift(), null);
  const resultHead = result;

  for (let i = 0; i < nums.length; i++) {
    result.next = new ListNode(nums[i], null);
    result = result.next;
  }

  return resultHead;
}

function reorderList(head: ListNode | null): void {
  const values: number[] = [];

  while (head != null) {
    values.push(head.val);
    head = head.next;
  }

  const firstPart = values.slice(0, values.length / 2);
  const secondPart = values.slice(values.length / 2);

  secondPart.reverse();

  let i = 0;
  let result: ListNode | null = new ListNode(firstPart.shift(), null);
  head = result;
  while (firstPart.length > 0 || secondPart.length > 0) {
    const newVal = i % 2 == 0 ? secondPart.shift() : firstPart.shift();
    result.next = new ListNode(newVal, null);
    i++;
    result = result?.next;
  }
}

reorderList(
  new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, null))))
);

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head == null) return null;

  // reverse first the linked list
  let newHead: ListNode | null = head;
  let newNext: ListNode | null = null;

  while (newHead != null) {
    newNext = new ListNode(newHead.val, newNext);
    newHead = newHead.next;
  }

  return newNext;
}

removeNthFromEnd(
  new ListNode(
    1,
    new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null))))
  ),
  2
);

function searchMatrix(matrix: number[][], target: number): boolean {
  let targetEntry: number[] | null = null;

  for (let index = 0; index < matrix.length; index++) {
    const element = matrix[index];
    const start = element[0];
    const end = element[element.length - 1];

    if (target == start) return true;
    if (target == end) return true;

    if (target > start && target < end) {
      targetEntry = element;
    }
  }

  if (!targetEntry) return false;

  let left = 0;
  let right = targetEntry.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (targetEntry[mid] == target) return true;

    if (targetEntry[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
}

searchMatrix(
  [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ],
  4
);

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function invertTree(root: TreeNode | null): TreeNode | null {
  if (root == null) return null;

  const tempLeft = root.left;
  root.left = root.right;
  root.right = tempLeft;

  invertTree(root.left);
  invertTree(root.right);

  return root;
}

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  nums1 = [...nums1.slice(0, m), ...nums2.slice(0, n)];
  nums1.sort();
}

// Product of Array Except Self
function productExceptSelf(nums: number[]): number[] {
  return [];
}
