// Compare the Triplets
// https://www.hackerrank.com/challenges/compare-the-triplets/problem

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// Score:10.00Status:Accepted

/**
 * @param {number[]} a
 * @param {number[]} b
 */
const compareTriplets = (a, b) =>
  a.reduce(
    ([as, bs], curr, idx) => [as + (b[idx] < curr), bs + (curr < b[idx])],
    [0, 0],
  );

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { deepStrictEqual } from 'assert';

deepStrictEqual(compareTriplets([5, 6, 7], [3, 6, 10]), [1, 1]);

deepStrictEqual(compareTriplets([17, 28, 30], [99, 16, 8]), [2, 1]);
