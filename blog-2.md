# Four Pillars of OOP in Real-World Development

Modern software applications are becoming larger and more complex every day. In large-scale TypeScript projects, developers often work with thousands of lines of code, multiple modules, APIs, databases, authentication systems, and reusable UI components. As the project grows, maintaining clean architecture and manageable logic becomes one of the biggest challenges in software development.
This is where the four pillars of Object-Oriented Programming—Inheritance, Polymorphism, Abstraction, and Encapsulation—play an important role. These core principles help developers organize code into reusable, flexible, and maintainable structures. Instead of creating tightly connected and difficult-to-manage systems, OOP encourages modular design, better code separation, and scalable architecture.

Object-oriented programming seeks to address many of the problems with traditional programming techniques. The type of programming you have seen so far is known as functional (or procedural) programming, often resulting in so-called monolithic applications, meaning all functionality is contained in a few modules of code
(often just one). With OOP techniques, you often use many more modules of code, each offering specific
functionality, and each module may be isolated or even completely independent of the others. This
modular method of programming gives you much more versatility and provides more opportunity for
code reuse.

Object-Oriented Programming (OOP) is built on four fundamental principles, often referred to as the "pillars" of OOP. These principles help developers create modular, maintainable, and scalable software systems.

## Pillars of OOP

- Encapsulation
- Abstraction
- Inheritance
- Polymorphism

# Encapsulation

Encapsulation keeping data and related logic together inside a class while hiding unnecessary internal details. Instead of allowing every file to directly modify data, the class controls how data changes. Encapsulation hides internal state and implementation details behind a public API. In TypeScript, the private, protected, and readonly modifiers enforce this at compile time.

## Usage/Examples

```javascript

class BankAccount {
  public readonly userId: number;
  public userName: string;
  private userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  private addBalance(balance: number) {
    this.userBalance = this.userBalance + balance;
  }

  callHiddenMethod(balance: number) {
    this.addBalance(balance);
  }
}

class StudentBankAccount extends BankAccount {
   test() {
      this.callHiddenMethod (100);
     }
}

const account = new BankAccount(31, "farida", 100);
console.log(account.callHiddenMethod(100));


```

# Abstraction

In Typescript, the abstract Object-Oriented Programming (OOP) technique is a way to define a "blueprint" for other classes. Abstraction means: hiding complex internal implementation details and showing only the essential features to the user. Here, the user knows what something does, but does not need to know how it works internally.

## Usage/Examples

```javascript
//* abstraction ==> Idea. implemented in 2 ways: 1. interface, 2. abstract class

interface IMediaPlayer {
  play(): void;
  pause(): void;
  stop(): void;
}

//? implementation IMediaPlayer

 class MusicPlayer implements IMediaPlayer {
   play(): void {
    console.log("Music is playing now! 😍");
  }
   pause(): void {
    console.log("Music is paused now! 🤓");   }
  stop(): void {
    console.log("Music is stopped now! 🙄");
  }
 }

 const musicPlayer = new MusicPlayer();
 musicPlayer.play();
 musicPlayer.pause();
 musicPlayer.stop();

//* abstract class implementation

abstract class MediaPlayer {
  abstract play(): void;
  abstract pause(): void;
  abstract stop(): void;
}

class MusicPlayer extends MediaPlayer {
  play(): void {
    console.log("Music is playing now! 😍");
  }
  pause(): void {
    console.log("Music is paused now! 🤓");
  }
  stop(): void {
    console.log("Music is stopped now! 🙄");
  }
}

const musicPlayer = new MusicPlayer();
musicPlayer.play();
musicPlayer.pause();
musicPlayer.stop();

```

# Inheritance

Inheritance is one of the most important features of OOP. Any class may inherit from another, which
means that it will have all the members of the class from which it inherits. In OOP terminology, the
class being inherited from (derived from) is the parent class (also known as the base class). Classes in
C# may derive only from a single base class directly, although of course that base class may have a base
class of its own, and so on.

## Usage/Examples

```javascript
//* Inheritance

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  getInfo() {
    console.log(`Hello! I am ${this.name} 🙂`);
  }

  getSleep(sleepingHours: number) {
    console.log(`${this.name} sleeps ${sleepingHours} hours!!`);
  }
}

class Student extends Person {

  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    super(name);
    this.age = age;
    this.address = address;
  }


  getStudenttInfo() {
    console.log(
      `Hello! I am ${this.name} 🙂, I am ${this.age} years old and my address is : ${this.address}`,
    );
  }

}

const lisa = new Student("lisa muhury", 21, "jamal khan in chittagong 🖐️");
lisa.getStudenttInfo();
lisa.getSleep(10);

class Teacher extends Person {

  course: string;
  designation: string;

  constructor(name: string, course: string, designation: string) {
    super(name);
    this.name = name;
    this.course = course;
    this.designation = designation;
  }


  getTeacherInfo() {
    console.log(
      `Hello! I am ${this.name} 🙂, I am your ${this.course} teacher ✋! and
       my designation is : ${this.designation}`,
    );
  }


  takeClass(numOfClass: number) {
    console.log(`${this.name} taking ${numOfClass} hours class everyday!`);
  }
}

const teacher = new Teacher(
  "Ashfak Habib",
  "Computer Network",
  "Assistant Professor",
);

teacher.getTeacherInfo();

```

# Polymorphism

Polymorphism is an extremely useful technique for performing tasks with a minimum of code on different objects descending from a single class. It isn’t just classes sharing the same parent class that can
make use of polymorphism. It is also possible to treat, say, a child and a grandchild class in the same
way, as long as there is a common class in their inheritance hierarchy.

## Usage/Examples

```javascript

class Person {
  getSleep() {
    console.log("I get sleep for 10 hours");
  }
}

class Student {
  getSleep() {
    console.log("I get sleep for 6 hours");
  }
}
class NextLevelDeveloper {
  getSleep() {
    console.log("I get sleep for 5 hours");
  }
}

class Shape {
  getArea(): number {
    return 0;
  }
}

class Circle extends Shape {
  //? area = pi * r * r

  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
class Rectangle extends Shape {
  //? area =   height * width
  height: number;
  width: number;
  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }
  getArea(): number {
    return this.height * this.width;
  }
}
const getSleepingHours = (param: Person) => {
  param.getSleep();
};
const getArea = (param: Shape) => {
  param.getArea();
};

const person = new Person();
const student = new Student();
const proDeveloper = new NextLevelDeveloper();

const shape = new Shape();
const circle = new Circle(5);
const rectangle = new Rectangle(3, 9);

getSleepingHours(person);
getSleepingHours(student);
getSleepingHours(proDeveloper);

getArea(shape);
getArea(circle);
getArea(rectangle);

```
