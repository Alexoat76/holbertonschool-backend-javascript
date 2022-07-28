// HolbertonClass Class
/**
 * Build initial class
 * @class HolbertonClass
 */
export default class HolbertonClass {
  constructor(size, location) {
    // Create objs
    this._size = size;
    this._location = location;
  }

  // Methods

  [Symbol.toPrimitive](dataType) {
    if (dataType === 'string') return this._location;
    if (dataType === 'number') return this._size;
    return this._location; // default
  }

  // Setters for size and location
  set size(value) {
    this._size = value;
  }

  set location(value) {
    this._location = value;
  }

  // Getters for size and location
  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }
}
