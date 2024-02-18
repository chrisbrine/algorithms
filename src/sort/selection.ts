import { DefaultType, defaultCompare } from "./default";

export default function selectionSort<T = DefaultType>(
  arr: T[],
  compare: (a: T, b: T) => number = defaultCompare,
): T[] {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (compare(arr[j], arr[min]) < 0) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}
