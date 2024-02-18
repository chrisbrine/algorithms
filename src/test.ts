import Algorithms from './index';
import SortTests from './sort/test';
import SearchTests from './search/test';

interface AllResults {
  fail: number;
  failed: {[key: string]: number};
  success: number;
  succeeded: {[key: string]: number};
  total: number;
  all: {[key: string]: number};

}

const results: AllResults = {
  fail: 0,
  failed: {},
  success: 0,
  succeeded: {},
  total: 0,
  all: {},
};

function fail(message: string, value: any): void {
  console.error('[FAIL]', message, value);
  results.fail++;
  if (message in results.failed) {
    results.failed[message]++;
  } else {
    results.failed[message] = 1;
  }
}
function success(message: string, value: any, showResult: boolean = false): void {
  if (showResult) {
    console.info('[PASS]', message, value);
  } else {
    console.info('[PASS]', message);
  }
  results.success++;
  if (message in results.succeeded) {
    results.succeeded[message]++;
  } else {
    results.succeeded[message] = 1;
  }
}
function testMessage(message: string, value: any, testFunction: Function, showResult: boolean = false): void {
  if (testFunction(value)) {
    success(message, value, showResult);
  } else {
    fail(message, value);
  }
  results.total++;
  if (message in results.all) {
    results.all[message]++;
  } else {
    results.all[message] = 1;
  }
}

// run tests on Algorithms.Sort with each option in sort/test.ts
function CompareSort(arr: number[], expected: number[]): boolean {
  if (arr.length !== expected.length) return false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== expected[i]) return false;
  }
  return true;
}

SortTests.forEach(({arr, expected}) => {
  console.log('Array: ', arr);
  console.log('Expected: ', expected);
  const bubbleSorted = Algorithms.Sort.bubbleSort(arr);
  testMessage(
    'Bubble Sort',
    Algorithms.Sort.bubbleSort(arr),
    (value: number[]) => CompareSort(value, expected),
  );
  testMessage(
    'Insertion Sort',
    Algorithms.Sort.insertionSort(arr),
    (value: number[]) => CompareSort(value, expected),
  );
  testMessage(
    'Merge Sort',
    Algorithms.Sort.mergeSort(arr),
    (value: number[]) => CompareSort(value, expected),
  );
  testMessage(
    'Quick Sort',
    Algorithms.Sort.quickSort(arr),
    (value: number[]) => CompareSort(value, expected),
  );
  testMessage(
    'Selection Sort',
    Algorithms.Sort.selectionSort(arr),
    (value: number[]) => CompareSort(value, expected),
  );
  testMessage(
    'Shell Sort',
    Algorithms.Sort.shellSort(arr),
    (value: number[]) => CompareSort(value, expected),
  );
});
// run tests on Algorithms.Search with each option in search/test.ts
SearchTests.sorted.forEach(({arr, value, expected}) => {
  console.log('Array: ', arr);
  console.log('Value: ', value);
  console.log('Expected: ', expected);
  testMessage(
    'Binary Search',
    Algorithms.Search.binary(arr, value),
    (result: number) => result === expected,
  );
});

SearchTests.unsorted.forEach(({arr, value, expected}) => {
  console.log('Array: ', arr);
  console.log('Value: ', value);
  console.log('Expected: ', expected);
  testMessage(
    'Linear Search',
    Algorithms.Search.linear(arr, value),
    (result: number) => result === expected,
  );
});

// display Results
console.log(`Results: ${results.success}/${results.total} tests passed`);
if (results.fail > 0) {
  console.error('Failed Tests:');
  console.error(results.failed);
}
