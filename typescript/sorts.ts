const quickSort = (
  arr: number[],
  start: number = 0,
  end: number = arr.length
): number[] => {
  if (start < end) {
    let p = partition(arr, start, end);
    quickSort(arr, start, p - 1);
    quickSort(arr, p + 1, end);
  }
  return arr;
};

const partition = (
  arr: number[],
  start: number = 0,
  end: number = arr.length
) => {
  let pivot: number = arr[start];
  let swapIndex: number = start;
  for (let i = start + 1; i < end; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      swap(arr, i, swapIndex);
    }
  }
  swap(arr, start, swapIndex);
  return swapIndex;
};

const swap = (arr: number[], i: number, j: number) => {
  [arr[i], arr[j]] = [arr[j], arr[i]];
};

console.log(quickSort([4, 2, 8, 1]));
