import { DefaultType, defaultCompare } from "./default";

export default function bubbleSort<T = DefaultType>(
  arr: T[],
  compare: (a: T, b: T) => number = defaultCompare,
): T[] {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (compare(arr[j], arr[j + 1]) > 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
