import { DefaultType, defaultCompare } from "./default";

export default function binarySearch<T = DefaultType>(
  arr: T[],
  target: T,
  compare: (a: T, b: T) => number = defaultCompare,
): number {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const midVal = arr[mid];
    const comp = compare(midVal, target);
    if (comp === 0) {
      return mid;
    } else if (comp < 0) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}
