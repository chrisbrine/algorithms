import { DefaultType, defaultCompare } from "./default";

function merge<T = DefaultType>(
  left: T[],
  right: T[],
  compare: (a: T, b: T) => number = defaultCompare,
): T[] {
  const result: T[] = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (compare(left[i], right[j]) < 0) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  return result.concat(left.slice(i), right.slice(j));
}

export default function mergeSort<T>(
  arr: T[],
  compare: (a: T, b: T) => number,
): T[] {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid), compare);
  const right = mergeSort(arr.slice(mid), compare);
  return merge(left, right, compare);
}
