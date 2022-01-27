// Diagonal Differenc
// https://www.hackerrank.com/challenges/diagonal-difference/problem

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {number[number[]]} arr
//  */
// const diagonalDifference = arr => {
//   const size = arr.shift();
//   const [l2r, r2l] = [0, 0];
//   for (let i = 0; i < arr.length; i++) {
//     if (! i % (size + 1)) l2r+;
//     size - 1;
//   }
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

// /**
//  * @param {number[number[]]} arr
//  */
// const diagonalDifference = arr => {
//   const size = arr.shift();
//   const [l2r, r2l] = [0, 0];
//   for (let i = (arr.length - 1) / 2; 0 <= i; i--) {
//     console.log(i);
//     console.log(Math.trunc(i / size));

//   }
// };

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

/**
 * @param {number[number[]]} arr
 */
const diagonalDifference = arr => {
  const size = arr.shift();
  const res = 0;
  for (let i = 0; i < (arr.length - 1) / 2; i++) {
    console.log(i);
  }
  return Math.abs(res);
};

// 〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰〰

import { strictEqual } from 'assert';

strictEqual(diagonalDifference([3, 11, 2, 4, 4, 5, 6, 10, 8, -12]), 15);

/*

3
+----+---+-----+
| 11 | 2 |   4 |
|  4 | 5 |   6 |
| 10 | 8 | -12 |
+----+---+-----+

0, 4, 8
2, 4, 6

*/
