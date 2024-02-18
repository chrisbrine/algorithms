import { DefaultType, defaultCompare } from "./sort/default";

import BubbleSort from './sort/bubble';
import InsertionSort from './sort/insertion';
import MergeSort from './sort/merge';
import QuickSort from './sort/quick';
import SelectionSort from './sort/selection';
import ShellSort from './sort/shell';

export default class Sort {
  static bubbleSort<T = DefaultType>(
    arr: T[],
    compare: (a: T, b: T) => number = defaultCompare,
  ): T[] {
    return BubbleSort(arr, compare);
  }
  static insertionSort<T = DefaultType>(
    arr: T[],
    compare: (a: T, b: T) => number = defaultCompare,
  ): T[] {
    return InsertionSort(arr, compare);
  }
  static mergeSort<T = DefaultType>(
    arr: T[],
    compare: (a: T, b: T) => number = defaultCompare,
  ): T[] {
    return MergeSort(arr, compare);
  }
  static quickSort<T = DefaultType>(
    arr: T[],
    compare: (a: T, b: T) => number = defaultCompare,
  ): T[] {
    return QuickSort(arr, compare);
  }
  static selectionSort<T = DefaultType>(
    arr: T[],
    compare: (a: T, b: T) => number = defaultCompare,
  ): T[] {
    return SelectionSort(arr, compare);
  }
  static shellSort<T = DefaultType>(
    arr: T[],
    compare: (a: T, b: T) => number = defaultCompare,
  ): T[] {
    return ShellSort(arr, compare);
  }
}
