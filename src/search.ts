import { DefaultType, defaultCompare } from "./search/default";
import BinarySearch from "./search/binary";
import LinearSearch from "./search/linear";

export default class Search {
  static binary<T = DefaultType>(
    arr: T[],
    target: T,
    compare: (a: T, b: T) => number = defaultCompare,
  ): number {
    return BinarySearch(arr, target, compare);
  }
  static linear<T = DefaultType>(
    arr: T[],
    value: T,
    compare: (a: T, b: T) => number = defaultCompare,
  ): number {
    return LinearSearch(arr, value, compare);
  }
}
