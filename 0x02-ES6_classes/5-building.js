/**
 *  Abstract Building class
 * @class Building
 */

export default class Building {
  constructor(sqft) { // Constructor for the class Building
    /** If the class is not Building and the method evacuationWarningMessage is not implemented,
    * throw an error message and stop the execution of the program.
    */
    if (this.constructor !== Building
        && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Classes extending Building must override evacuationWarningMessage');
    }
    // Create objs
    this._sqft = sqft;
  }

  // Setter for sqft attribute for the class Building
  set sqft(sqft) { // Setter for sqft attribute (number)
    this._sqft = sqft;
  }

  // Getter for sqft attribute for the class Building
  get sqft() { // Getter for sqft attribute (string)
    return this._sqft;
  }
}
