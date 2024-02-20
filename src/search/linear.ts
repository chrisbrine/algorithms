import { DefaultType, defaultCompare } from "./default";

export default function linearSearch<T = DefaultType>(
  arr: T[],
  value: T,
  compare: (a: T, b: T) => number = defaultCompare,
): number {
  for (let i = 0; i < arr.length; i++) {
    if (compare(arr[i], value) === 0) return i;
  }
  return -1;
}