import { DefaultType, defaultCompare } from "./default";

export default function insertionSort<T = DefaultType>(
  arr: T[],
  compare: (a: T, b: T) => number = defaultCompare,
): T[] {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i - 1;
    while (j >= 0 && compare(arr[j], current) > 0) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}
