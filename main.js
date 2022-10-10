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

function Student(fn, ln, age) {
  this.firstName = fn;
  this.lastName = ln;
  this.age = age;
}

Student.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
  };

let student1 = new Student("rahul", "kumar", "18");
let student2 = new Student("Shashikant", "Prajapti", "20");

console.log(student1.fullName());
console.log(student2.fullName());
