# Overview

This assignment focuses on TypeScript fundamentals and intermediate concepts, including type safety, generics, interfaces, and problem-solving. It includes theoretical questions, coding problems, and blog writing to demonstrate practical understanding of TypeScript.

# 🎯 Objectives

- Understand TypeScript basics and type system
- Work with interfaces, types, and generics
- Solve real-world coding problems using TypeScript
- Improve writing and conceptual understanding through blogs

# 💻 Problem Solving

## Problem-1

Create a TypeScript function filterEvenNumbers that accepts an array of numbers and returns a new array containing only the even numbers.

## Samples

```javascript
// Sample Input:
filterEvenNumbers([1, 2, 3, 4, 5, 6])[
  // Sample Output:
  (2, 4, 6)
];
```

## problem-1 : Solution

This function filters an array of numbers and returns only even numbers. It uses the filter() method with a condition num % 2 === 0 to check even values. The original array remains unchanged, and a new array is returned with only valid even numbers.

## Problem-2 : Statement

Write a function reverseString that takes a string as input and returns the reversed version of that string.

## Samples

```javascript
// Sample Input:
reverseString("typescript");

// Sample Output:
("tpircsepyt");
```

## problem-2 : Solution

This solution demonstrates a simple and effective way to reverse a string in TypeScript using built-in methods. By combining split(), reverse(), and join(), we can write concise and readable code without using complex logic. A string can be reversed in TypeScript by converting it to an array, reversing the array, and joining it back, commonly using the .split('').reverse().join('') method.

## Problem-3 : Statement

Define a union type StringOrNumber and create a function checkType that uses type guards to return "String" if the input is a string or "Number" if the input is a number.

## Samples

```javascript
// Sample Input 1:
checkType("Hello");

// Sample Output 1:
("String");

// Sample Input 2:
checkType(42);

// Sample Output 2:
("Number");
```

## problem-3 : Solution

This solution demonstrates how union types and type guards work together in TypeScript. By defining a StringOrNumber type and checking the value with typeof, we can safely handle multiple data types inside a single function.

## Problem-4 : Statement

Write a generic function getProperty that takes an object and a key, then returns the value of that key. Use constraints to ensure the key exists on the object.

## Samples

```javascript
// Sample Input:
const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");

// Sample Output:
("John Doe");
```

## problem-4 : Solution

This solution demonstrates how generics and keyof constraints work together in TypeScript to create flexible and type-safe functions. The getProperty function safely retrieves object values while ensuring that only existing keys can be used.

## Problem-5 : Statement

Define an interface Book with properties title, author, and publishedYear. Create a function toggleReadStatus that accepts a Book object and returns a new object with an added isRead property (boolean), defaulting to true.

## Samples

```javascript
// Sample Input:
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
toggleReadStatus(myBook);

// Sample Output:
{
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
  isRead: true
}
```

## problem-5 : Solution

This solution demonstrates how interfaces help define object structures in TypeScript and how we can extend objects safely using the spread operator. The toggleReadStatus function creates a new object with an additional isRead property while keeping the original object unchanged.

## Problem-6 : Statement

Create a class Person with a name and age. Then, create a subclass Student that adds a grade property. Include a method getDetails in the Student class that returns a string with the student's name, age, and grade.

## Samples

```javascript
// Sample Input:
const student = new Student("Alice", 20, "A");
student.getDetails();

// Sample Output:
("Name: Alice, Age: 20, Grade: A");
```

## problem-6 : Solution

This solution demonstrates how inheritance works in TypeScript using classes. The Student class inherits common properties from the Person class while adding its own unique property and method.

## Problem-7 : Statement

Create a function getIntersection that takes two arrays of numbers and returns a new array containing only the elements that are present in both arrays.

## Samples

```javascript
// Sample Input:
getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])[
  // Sample Output:
  (3, 4, 5)
];
```

## problem-7 : Solution

This solution demonstrates how to find common elements between two arrays using the filter() and includes() methods in TypeScript. The function efficiently compares two arrays and returns only the shared values.
