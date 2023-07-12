//  1 .Write a JavaScript function to calculate the sum of two numbers.

var sum=14
var number=12
function calculateSum(a, b) {
    return a + b;
  }
  const num1 = 5;
const num2 = 10;

const sum = calculateSum(num1, num2);
console.log(sum); // Output: 15

// 2. Write a program to print the numbers from 1 to 10 using a for loop.
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
//3. Implement a JavaScript function to find the factorial of a given number.
function calculateFactorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      let factorial = 1;
      for (let i = 2; i <= num; i++) {
        factorial *= i;
      }
      return factorial;
    }
  }
//4. Write a JavaScript program to print the even numbers between 1 and 20 using a while loop.
let num = 1;
while (num <= 20) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}
//5. Create a function that takes an array of numbers and returns the sum of all the elements.
function calculateSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
// 6.  Write a program to print the Fibonacci sequence up to a given number using a for loop.
function printFibonacciSequence(limit) {
    let fibonacci = [0, 1];
  
    for (let i = 2; fibonacci[i - 1] + fibonacci[i - 2] <= limit; i++) {
      fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
  
    console.log(fibonacci.join(', '));
  }

// 7.  Implement a JavaScript function to check if a number is prime or not.
function isPrime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
// 8.Write a program to calculate the factorial of a given number using a do-while loop.
function calculateFactorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    }
  
    let factorial = 1;
    let i = 1;
  
    do {
      factorial *= i;
      i++;
    } while (i <= number);
  
    return factorial;
  }
// 9.  Create a function that takes a string as input and returns the reverse of the string.

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
// 10.  Write a JavaScript program to find the largest element in an array using a for loop.
function findLargestElement(array) {
    if (array.length === 0) {
      return undefined;
    }
  
    let largest = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > largest) {
        largest = array[i];
      }
    }
  
    return largest;
  }
//11. Implement a JavaScript function to calculate the area of a rectangle given its length and width.
function calculateRectangleArea(length, width) {
    return length * width;
  }
// 12.Write a program to print the multiplication table of a given number using a while loop.
function printMultiplicationTable(number) {
    let i = 1;
    while (i <= 10) {
      const result = number * i;
      console.log(`${number} * ${i} = ${result}`);
      i++;
    }
  }
  //13.Create a function that takes an array of numbers and returns the average of all the elements.
  function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0;
    }
  
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
  
    return sum / numbers.length;
  }
// 14.Write a JavaScript program to check if a given year is a leap year using a switch case.
function isLeapYear(year) {
    let isLeap = false;
  
    switch (true) {
      case (year % 400 === 0):
        isLeap = true;
        break;
      case (year % 100 === 0):
        isLeap = false;
        break;
      case (year % 4 === 0):
        isLeap = true;
        break;
      default:
        isLeap = false;
    }
  
    return isLeap;
  }
//15.Implement a JavaScript function to find the GCD (Greatest Common Divisor) of two numbers.
function findGCD(a, b) {
    // Ensure positive integers
    a = Math.abs(a);
    b = Math.abs(b);
  
    // Base case
    if (b === 0) {
      return a;
    }
  
    // Recursive case
    return findGCD(b, a % b);
  }
//16.Write a program to print the numbers from 10 to 1 in descending order using a for loop.
for (let i = 10; i >= 1; i--) {
    console.log(i);
  }
// 17.Create a function that takes a string as input and counts the number of vowels in the string.
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) {
        count++;
      }
    }
  
    return count;
  }
//18.Write a JavaScript program to print a triangle of asterisks using a nested for loop.
function printTriangle(height) {
    for (let i = 1; i <= height; i++) {
      let row = '';
  
      // Add asterisks based on row number
      for (let j = 1; j <= i; j++) {
        row += '*';
      }
  
      console.log(row);
    }
  }
//19.Implement a JavaScript function to check if a given string is a palindrome.
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const alphanumericStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
    // Check if the reversed string matches the original string
    const reversedStr = alphanumericStr.split('').reverse().join('');
    return alphanumericStr === reversedStr;
  }
// 20.Write a program to calculate the sum of all the odd numbers between 1 and 50 using a while loop.
let number = 1;
let sum = 0;

while (number <= 50) {
  if (number % 2 !== 0) {
    sum += number;
  }
  number++;
}

console.log(sum);
//  21.Create a function that takes an array of strings and returns the longest string in the array.
function findLongestString(strings) {
  let longestString = '';

  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > longestString.length) {
      longestString = strings[i];
    }
  }

  return longestString;
}
// 22.Write a JavaScript program to check if a given number is a perfect square using a switch case.
function isPerfectSquare(number) {
  if (number < 0) {
    return false;
  }

  const sqrt = Math.sqrt(number);
  return sqrt === Math.floor(sqrt);
}

const number = 16;
const isSquare = isPerfectSquare(number);
console.log(isSquare); // Output: true
// 23.Implement a JavaScript function to reverse an array in-place.
function reverseArrayInPlace(array) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const temp = array[left];
    array[left] = array[right];
    array[right] = temp;

    left++;
    right--;
  }

  return array;
}
// 24.Write a program to print the first 10 multiples of a given number using a for loop.
function printMultiples(number) {
  for (let i = 1; i <= 10; i++) {
    const result = number * i;
    console.log(`${number} x ${i} = ${result}`);
  }
}
// 25.Create a function that takes a string as input and checks if it is a valid email address.
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
// 26.Write a JavaScript program to calculate the factorial of a given number using a recursive function.
function calculateFactorial(number) {
  // Base case: factorial of 0 is 1
  if (number === 0) {
    return 1;
  }

  // Recursive case: calculate factorial using recursion
  return number * calculateFactorial(number - 1);
}
// 27.Implement a JavaScript function to check if a given number is even or odd using a switch case.
function checkEvenOdd(number) {
  switch (number % 2) {
    case 0:
      return 'Even';
    case 1:
      return 'Odd';
    default:
      return 'Invalid number';
  }
}
// 28.Write a program to find the sum of all the prime numbers between 1 and 100 using a while loop.
function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

let sum = 0;
let currentNumber = 1;

while (currentNumber <= 100) {
  if (isPrime(currentNumber)) {
    sum += currentNumber;
  }
  currentNumber++;
}

console.log(sum);
// 29.Create a function that takes an array of numbers and returns the smallest element in the array.
function findSmallestElement(numbers) {
  if (numbers.length === 0) {
    return undefined;
  }

  let smallest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }

  return smallest;
}
// 30.Write a JavaScript program to convert a decimal number to binary using a do-while loop.
function decimalToBinary(decimal) {
  let binary = '';
  let quotient = decimal;

  do {
    const remainder = quotient % 2;
    binary = remainder + binary;
    quotient = Math.floor(quotient / 2);
  } while (quotient > 0);

  return binary;
}
