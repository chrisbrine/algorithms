import { DefaultType, defaultCompare } from "./default";

export default function shellSort<T = DefaultType>(
  arr: T[],
  compare: (a: T, b: T) => number = defaultCompare,
): T[] {
  let gap = Math.floor(arr.length / 2);
  while (gap > 0) {
    for (let i = gap; i < arr.length; i++) {
      const current = arr[i];
      let j = i;
      while (j >= gap && compare(arr[j - gap], current) > 0) {
        arr[j] = arr[j - gap];
        j -= gap;
      }
      arr[j] = current;
    }
    gap = Math.floor(gap / 2);
  }
  return arr;
}
