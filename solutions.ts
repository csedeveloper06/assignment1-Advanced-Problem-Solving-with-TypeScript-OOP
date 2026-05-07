// Problem solving

//* problem-1 :

function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

//* problem - 2

function reverseString(param: string): string {
  return param.split("").reverse().join("");
}

//* problem-3
type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
}

//* problem-4

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

/*

    const user = { id: 1, name: "John Doe", age: 21 };
    getProperty(user, "name");

*/

//* problem -5

interface IBook {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: IBook) {
  return {
    ...book,
    isRead: true,
  };
}

//* problem-6

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

//* problem -7

function getIntersection(num1: number[], num2: number[]): number[] {
  return num1.filter((num) => num2.includes(num));
}
