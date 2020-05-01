/*
  1. Create function 'findBiggestNuber' which takes one argument - array of numbers.
  It should return biggest number in array.

  2. Create function 'findFirstEvenNumber' which takes one argument - array of numbers.
  It should return first number in array, which is disivible by 2.

  3. Create function 'findFirstEvenPositiveNumber' which takes one argument - array of numbers.
  It should return first positive number in array, which is divisible by 2.

  4. Create function 'findPositiveNumbers' which takes one argument - array of numbers.
  It should return array of numbers which are non negative an not equal 0.
*/

const numbers = [1, 9, 5, 17, -10, 11, 16, 0];

const findBiggestNumber = (array) => array.reduce((a, b) => Math.max(a, b));
console.log(findBiggestNumber(numbers));

const findFirstEvenNumber = (arr) => arr.filter((num) => num % 2 === 0);

console.log(findFirstEvenNumber(numbers));

const findFirstEvenPositiveNumber = (arr) =>
  arr.filter((num) => num % 2 === 0 && num > 0);

console.log(findFirstEvenPositiveNumber(numbers));

const findPositiveNumbers = (arr) => arr.filter((num) => num > 0 && num != 0);

console.log(findPositiveNumbers(numbers));