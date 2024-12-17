//constructor function
function Vehicle(name, color, wheels) {
  this.name = name;
  this.color = color;
  this.wheels = wheels;

  Vehicle.prototype.getDetails = function () {
    console.log(
      `The ${this.name} is ${this.color} in color.It has ${this.wheels} wheels`
    );
  };
}

// const car = new Vehicle("Car", "blue", 4);
// console.log(car.hasOwnProperty("getDetails"));

// car.getDetails();

// //class expressions
// const Vehicle = class{

// }

//Classes in JS.. Class declaration
class VehicleCl {
  //Private properties
  #regNumber;
  //   name;
  //   color;
  //   wheels;
  //constructor
  constructor(name, color, wheels, number) {
    this.name = name;
    this.color = color;
    this.wheels = wheels;
    this.#regNumber = number;
  }
  //Private Method
  #getNumber(number){
    return number;
  }
  //methods
  getDetails() {
    console.log(`
      The ${this.name} is ${this.color} in color.
      It has ${this.wheels} wheels.
      Registration Number is : ${this.#getNumber(this.#regNumber)}
    `);
  }
}

const veh1 = new VehicleCl("Scooter", "Grey", 2, 8866);

console.log(veh1);
// veh1.getDetails();
// console.log(veh1.hasOwnProperty("getDetails"));

veh1.name = "Car";
// console.log(veh1.#regNumber);
veh1.getDetails();
// veh1.#getNumber();

