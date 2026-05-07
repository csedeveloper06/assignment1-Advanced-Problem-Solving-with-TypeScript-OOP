# Introduction

In TypeScript, building applications often requires working with different types of data such as strings, numbers, objects, or API responses. Writing separate functions or components for each type can quickly become repetitive and difficult to maintain. This is where Generics come in.

Generics allow you to create reusable and flexible code structures while still maintaining strict type safety. Instead of fixing a specific type, you define a placeholder type that TypeScript can determine when the code is used. This makes your functions, components, and data structures adaptable to different inputs without losing control over type checking.

In short, generics help you write code that is both highly reusable and strongly typed, which is a key concept in scalable TypeScript development.

# Generics

Generic classes, conversely, make things a lot simpler. A generic class is one that is built around whatever type, or types, you supply during instantiation, enabling you to strongly type an object with hardly any effort at all.Generics in TypeScript let you write reusable code that still keeps strict type safety, no matter what data type you pass in.Instead of fixing a type like string or number, you use a type placeholder (usually T) that gets decided when the function/component is used.

## So, TypeScript can:

- remember the input type
- enforce correct usage
- prevent type mistakes
- still allow reuse for many types

## Generics usecases

```javascript
//? dynamically generalize

type GenericArray<T> = Array<T>;

//* const friends : string[] = ['Mr. x', 'Mr. Y', 'Mr. Z'];
const friends: GenericArray<string> = ["Mr. x", "Mr. Y", "Mr. Z"];

//* const rollNumbers : number[] = [ 3, 5, 7, 11 ];

const rollNumbers: GenericArray<number> = [3, 5, 7, 11];

//* const isResponsibleList : boolean[] = [ true, false ];

const isResponsibleList: GenericArray<boolean> = [true, false];

//? tuple example

type Coordinates<X, Y> = [X, Y];

const Coordinates1: Coordinates<number, number> = [20, 37];

const Coordinates2: Coordinates<string, string> = ["height", "length"];

//? generic objects

type User = { name: string; age: string };

const userList: GenericArray<User> = [
  {
    name: "lisa",
    age: "12",
  },
  {
    name: "nisha",
    age: "22",
  },
  {
    name: "tisha",
    age: "32",
  },
  {
    name: "lopa",
    age: "27",
  },
  {
    name: "anika",
    age: "16",
  },
];

```

## Generics With Functions

```javascript
//? functions in generics

const createArrayWithString = (value: string) => [value];

const createArrayWithNumber = (value: number) => [value];

const createArrayWithObject = (value: { id: number; name: string }) => {
  return [value];
};

const createArrayWithGeneric = <T>(value: T) => {
  return [value];
};

const arrString = createArrayWithGeneric("Apple");
const arrNumber = createArrayWithGeneric(87);
const arrObj = createArrayWithGeneric({
  id: 631,
  name: "yasmin",
});

const createArrayWithTuple = (param1: string, param2: string) => [
  param1,
  param2,
];

const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [
  param1,
  param2,
];

const res1 = createArrayTupleWithGeneric("jasmin", true);
const res2 = createArrayTupleWithGeneric(111, { name: "yasmin" });

const addStudentToCourse = <T>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student1 = {
  id: 111,
  name: "yas",
  hasPen: true,
};
const student2 = {
  id: 121,
  name: "jas",
  hasCar: true,
  isMarried: false,
};

const result = addStudentToCourse(student1);
console.log(result);

```

## Generics With Interfaces

```javascript
interface IDeveloper<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };

  smartWatch: T;
  bike?: X;
}

interface PoorSmartWatch {
  heartRate: string;
  stopWatch: boolean;
}

interface RichSmartWatch {
  heartRate: string;
  callSupport: boolean;
  calculator: boolean;
  AiFeature: boolean;
}

interface RichBike {
  brand: string;
  model: string;
  price: number;
}

const poorDeveloper: IDeveloper<PoorSmartWatch> = {
  name: "jasmin",
  salary: 200000,
  device: {
    brand: "apple",
    model: "2016",
    releasedYear: "2017",
  },

  smartWatch: {
    heartRate: "200",
    stopWatch: true,
  },
};
const richDeveloper: IDeveloper<RichSmartWatch, RichBike> = {
  name: "tasmin",
  salary: 500000,
  device: {
    brand: "apple",
    model: "2016",
    releasedYear: "2017",
  },

  smartWatch: {
    heartRate: "100",
    callSupport: true,
    calculator: true,
    AiFeature: true,
  },
  bike: {
    brand: "yamaha",
    model: "golang",
    price: 100000,
  },
};

```

# Conclusion

Generics in TypeScript are a powerful way to build flexible yet strongly typed code. They allow you to write reusable functions, components, and data structures without losing type safety. Instead of locking your code to a single type, generics let you use a type placeholder that adapts based on how the function or component is used.

This means you can handle different data types with a single implementation while still getting full TypeScript protection against errors. In real-world development—especially in React, Express, and API handling—generics help keep your code clean, scalable, and reliable as your application grows.
