const user1 = {
  username: "Sara",
  age: 12,
  marks: {
    maths: 20,
    eng: 25,
  },
  getMarks() {
    console.log(this.marks);
  },
};

//Deep Copy and shallow Copy

//Deep Copy

const user2 = JSON.parse(JSON.stringify(user1));

user2.username = "Harry";
user2.marks.maths = 10;
console.log(user2);
console.log(user1);

// const user2 = user1;
// console.log(user1);
// console.log(user2);

// user2.username = "Harry";
// console.log(user2);
// console.log(user1);

//Shallow Copy

// const user2 = {...user1};
// console.log(user2);
// console.log(user1);

// user2.username = "Harry";
// console.log(user2);
// console.log(user1);

//Object.assign
// const user2 = Object.assign({}, user1);
// console.log(user2);
// console.log(user1);

// user2.username = "Harry";
// user2.marks.maths = 10;
// console.log(user2);
// console.log(user1);

// const currentDate = new Date();
// console.log(currentDate.toString()); // Output: Wed Jun 14 2023
// // 12:34:56 GMT+0530 (India Standard Time)

// const randomNumber = Math.floor(Math.random() * 10); // Generates a
// // random integer between 0 and 9
// console.log(randomNumber);

// const jsonString = '{"name":"John","age":30,"city":"New York"}';
// const person = JSON.parse(jsonString);
// console.log(person.name); // Output: "John"

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

const jsonString = JSON.stringify(person);
console.log(jsonString); // Output:
// '{"name":"John","age":30,"city":"New York"}
