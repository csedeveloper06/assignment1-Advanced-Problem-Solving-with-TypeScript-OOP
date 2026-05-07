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
