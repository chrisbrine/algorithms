export default {
  // list of arrays (sorted and unsorted) and values to search for and expected indexes
  sorted: [
    {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      value: 1,
      expected: 0,
    },
    {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      value: 5,
      expected: 4,
    },
    {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      value: 10,
      expected: 9,
    },
    {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      value: 11,
      expected: -1,
    }
  ],
  unsorted: [
    {
      arr: [3, 2, 1],
      value: 1,
      expected: 2,
    },
    {
      arr: [3, 2, 1, 4],
      value: 4,
      expected: 3,
    },
    {
      arr: [3, 2, 1, 4, 5],
      value: 5,
      expected: 4,
    },
    {
      arr: [3, 2, 1, 4, 5, 6],
      value: 6,
      expected: 5,
    },
    {
      arr: [3, 2, 1, 4, 5, 6],
      value: 10,
      expected: -1,
    },
    {
      arr: [3, 2, 1, 4, 5, 6, 7],
      value: 7,
      expected: 6,
    },
    {
      arr: [3, 2, 1, 4, 5, 6, 7, 8],
      value: 8,
      expected: 7,
    },
    {
      arr: [3, 2, 1, 4, 5, 6, 7, 8, 9],
      value: 9,
      expected: 8,
    },
    {
      arr: [3, 2, 1, 4, 5, 6, 7, 8, 9, 10],
      value: 10,
      expected: 9,
    },
    {
      arr: [3, 2, 1, 4, 5, 6, 7, 8, 9, 10, 11],
      value: 11,
      expected: 10,
    },
    {
      arr: [3, 2, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      value: 12,
      expected: 11,
    },
    {
      arr: [3, 2, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
      value: 13,
      expected: 12,
    },
    {
      arr: [3, 2, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      value: 14,
      expected: 13,
    },
    {
      arr: [3, 2, 1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      value: 15,
      expected: 14,
    }
  ],
};