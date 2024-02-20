import { DefaultType, defaultCompare } from "./default";

export default function quickSort<T = DefaultType>(
  arr: T[],
  compare: (a: T, b: T) => number = defaultCompare,
): T[] {
  if (arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = [];
  const right = [];
  for (let i = 1; i < arr.length; i++) {
    if (compare(arr[i], pivot) < 0) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left, compare).concat([pivot], quickSort(right, compare));
}
