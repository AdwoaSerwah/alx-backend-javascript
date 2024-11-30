export default class HolbertonClass {
  constructor(size, location) {
    // Validate size and location attributes
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }

    // Assign to private attributes
    this._size = size;
    this._location = location;
  }

  // Override valueOf for numeric casting
  valueOf() {
    return this._size;
  }

  // Override toString for string casting
  toString() {
    return this._location;
  }
}
