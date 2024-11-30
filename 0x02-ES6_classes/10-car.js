const cloneCarSymbol = Symbol('cloneCar');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  [cloneCarSymbol]() {
    return new this.constructor(); // Create a new instance with no properties
  }

  cloneCar() {
    return this[cloneCarSymbol](); // Use the symbol-based method to clone
  }
}
