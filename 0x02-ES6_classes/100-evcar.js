// Import the class Car from 10-car.js
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    // Call constructor of super class (Building)
    super(brand, motor, color);

    // Create objs
    this._range = range;
  }

  // Methods

  cloneCar() {
    const NewObj = this.constructor[Symbol.species] || this.constructor;
    const clone = new NewObj();
    return clone;
  }
}
