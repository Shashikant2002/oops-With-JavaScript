// function Person(fn, ln, age) {
//   this.firstName = fn;
//   this.lastName = ln;
//   this.age = age;

//   this.sayHi = function () {
//     console.log("Shshikant Methond");
//   };
// }
// let person1 = new Person("Shashikant", "Prajapti", 20);
// let person2 = new Person("Shashikant2", "Prajapti2", 25);

// console.log(person1);
// person1.sayHi();
// console.log(person2);
// person2.sayHi();

// let person1 = {}
// console.log(person1)

// let person2 = {
//     name: "Shashikant"
// }
// console.log(person2)
// console.log(person2.hasOwnProperty('name'))

// function Human(ls) {
//   this.lifeSpan = ls;
// }
// Human.prototype.breath = function () {
//   console.log("Breathing...........");
// };

// let human1 = new Human(100);
// let human2 = new Human(200);

// console.log(human1);
// console.log(human2);
// human1.breath();
// human2.breath();

// function Student(fn, ln, age) {
//   this.firstName = fn;
//   this.lastName = ln;
//   this.age = age;
// }
// Student.prototype.fullName = function () {
//   return this.firstName + " " + this.lastName;
// };

// Student.prototype.__proto__ = Object.create(Human.prototype);

// let student1 = new Student("rahul", "kumar", "18");
// let student2 = new Student("Shashikant", "Prajapti", "20");

// console.log(student1);
// console.log(student2);
// student1.breath();
// student2.breath();
// console.log(student1.fullName());
// console.log(student2.fullName());

class person{
  constructor(age, name){
    this.age = age;
    this.name = name;
  }

  sayHi(){
    console.log(this.age, this.name);
  }

  static new = "Shashikant"
  static hello(){
    console.log("Static Method............")
  }
}

let person1 = new person(48,"Shashikant");

person1.sayHi()
console.log(person.new)

person1.sayHi()

class emp {
  constructor(fn) {
    this.name = fn;
  }
  msg() {
    console.log(this.name, "World");
  }
}

class manager extends emp {
  constructor(ln, fn, sup) {
    super(sup);
    this.name = this.name;
    this.lastname = this.name;
  }
  shas() {
    this.msg()
  }
}

class admin1 extends manager {
    constructor(name){
      super()
      this.fname = name;
    }
    name12(){
      console.log(this.fname)
    }
}

let admin12 = new admin1("prajapti");

admin12.name12()