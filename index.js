'use strict';
// exercise-functions-5
// -------------//
// -------------//
// -------------//
// EX:1
// Find the min and max element in the following array and switch their places. Print out the
// modified array in the console.
// Input: [ 3, 500, 12, 149, 53, 414, 1, 19 ]
// Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]

const replaceMinMax = function (arr) {
  let max = -Infinity;
  let min = Infinity;
  //   for loop as map
  arr.map(function (el, i) {
    if (el > max) {
      max = el;
    }
    if (el < min) {
      min = el;
    }
  });
  //   index of max and min
  let index = arr.indexOf(max);
  let index2 = arr.indexOf(min);
  //   replace
  let x = arr[index];
  arr[index] = arr[index2];
  arr[index2] = x;

  //   console.log(arr.indexOf(max));
  return { max, min, arr, x };
};

console.log(replaceMinMax([3, 500, 12, 149, 53, 414, 1, 19]));

// EX:2 Use the following array to make a new one by dividing its values by two and adding 5. If
// a given element&#39;s value is 0, change it to 20.
// Input: [ 3, 500, -10, 149, 53, 414, 1, 19 ]
// Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]

const divideAndAdd = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = 20;
    } else {
      arr[i] = arr[i] / 2 + 5;
    }
  }
  return arr;
};

console.log(divideAndAdd([3, 500, -10, 149, 53, 414, 1, 19]));

// EX:3 Initialize two arrays. The first one should contain student names, the second one the
// number of points for each student. Display students&#39; names with their corresponding
// grade. Use the following ranges:
// 51-60 -&gt; 6,
// 61-70 -&gt; 7,
// 71-80 -&gt; 8,
// 81-90 -&gt; 9,
// 91-100 -&gt; 10.
// Input:
// [ &quot;Micahel&quot;, &quot;Anne&quot;, &quot;Frank&quot;, &quot;Joe&quot;, &quot;John&quot;, &quot;David&quot;, &quot;Mark&quot;, &quot;Bill&quot; ], [ 50, 39, 63, 72, 99,
// 51, 83, 59 ]
// Output:
// Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete
// the exam.

let namesArray = [
  'Michael',
  'Anne',
  'Frank',
  'Joe',
  'John',
  'David',
  'Mark',
  'Bill',
];
let gradesArray = [50, 39, 63, 72, 99, 51, 83, 59];

const grade = function (arr1, arr2) {
  let gradedArray = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2[i] <= 50) {
      gradedArray.push(
        `${arr1[i]} acquired ${arr2[i]} and failed to proceed to the next part!`
      );
    }
    if (arr2[i] > 50 && arr2[i] < 60) {
      gradedArray.push(`${arr1[i]} acquired ${arr2[i]}`);
    }
    if (arr2[i] > 60 && arr2[i] < 70) {
      gradedArray.push(`${arr1[i]} acquired ${arr2[i]}`);
    }
    if (arr2[i] > 70 && arr2[i] < 80) {
      gradedArray.push(`${arr1[i]} acquired ${arr2[i]}`);
    }
    if (arr2[i] > 80 && arr2[i] < 90) {
      gradedArray.push(`${arr1[i]} acquired ${arr2[i]}`);
    }
    if (arr2[i] > 90 && arr2[i] < 100) {
      gradedArray.push(`${arr1[i]} acquired ${arr2[i]}`);
    }
  }

  return gradedArray;
};

console.log(grade(namesArray, gradesArray));

// EX:4 sort

const sortAndMultiply = function (arr) {
  return arr
    .sort(function (a, b) {
      return a - b;
    })
    .map(el => el * 2);
};

console.log(sortAndMultiply([13, 11, 15, 5, 6, 1, 8, 12]));

// EX:5 sort in descending order

const sortDescend = function (arr) {
  return arr.sort((a, b) => b - a);
};

console.log(sortDescend([13, 11, 15, 5, 6, 1, 8, 12]));

// EX:6 Write a program that uses a loop to add all the even numbers from 1 to 1000 and
// subtracts all the odd numbers 1 to 500 from the calculated sum. The result should then
// be multiplied by 12.5 and displayed in console.
// Output: 2350000

const loop1000 = function (n) {
  let sum = 0;
  let sum2 = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sum = sum + i;
    }
    if (i % 2 !== 0 && i <= n / 2) {
      sum2 = sum2 + i;
    }
  }
  return (sum - sum2) * 12.5;
};

console.log(loop1000(1000));

// EX:7

const takeString = function (arr) {
  let string = '';

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'string' && arr[i].length >= 2) {
      string += arr[i][0] + arr[i][1];
    }
  }
  return string;
};

console.log(
  takeString([
    'M',
    'Anne',
    12,
    'Steve',
    'Joe',
    'John',
    'David',
    'Mark',
    true,
    'A',
  ])
);

// EX:8 Write a program that takes a string and prints its characters out in reversed order in the
// console.

// solution 1
const reverseString = function (string) {
  return string.split('').reverse().join('');
};

console.log(reverseString('Belgrade Institute of Technology'));

// solution 2 with for loop

const reverseString2 = function (string) {
  let stringed = '';
  for (let i = 0; i < string.length; i++) {
    stringed = stringed + string[string.length - 1 - i];
  }

  return stringed;
};
console.log(reverseString2('Belgrade Institute of Technology'));

// // EX:9 Write a program that displays all the combinations of two numbers between 1 and 7.
// Don&#39;t display two of the same numbers at the same time. Display the number of possible
// combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).

const checkPairs = function (n, m) {
  let pairsArray = [];

  for (let i = n; i < m; i++) {
    for (let j = n; j < m; j++) {
      if (i === j) continue;
      pairsArray.push([i, j]);
    }
  }
  return pairsArray;
};

console.log(checkPairs(1, 7));

// EX:10

// function isPrime(n){
//     //                 n - 1
//     for(var i = 2; i < n / 2; i++){
//         if(n % i === 0){
//             return "Nije prost";
//         }
//     }
//     return "Prost je";
// }

// EX:11

const checkPalindrome = function (str) {
  let count = 0;
  let noSpaceString = str.split(' ').join('');
  for (let i = 0; i < noSpaceString.length; i++) {
    if (noSpaceString[i] === noSpaceString[noSpaceString.length - 1 - i]) {
      count++;
    }
  }
  //   console.log(noSpaceString.length);
  if (count === noSpaceString.length) {
    return true;
  }

  return false;
};

console.log(checkPalindrome('a nut for a jar of tuna'));

const findDivisor = function (n, m) {
  let number = 0;

  for (let i = 1; i <= m; i++) {
    if (n % i === 0 && m % i === 0) {
      number = i;
    }
  }
  return number;
};

console.log(findDivisor(192, 42));
console.log(findDivisor(81, 9));
