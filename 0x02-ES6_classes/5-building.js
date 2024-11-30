export default class Building {
  constructor(sqft) {
    // Validate attribute
    if (typeof sqft !== 'number') {
      throw new TypeError('Square footage must be a number');
    }

    // Assign to private attribute
    this._sqft = sqft;

    // Enforce abstract class behavior
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }
}
