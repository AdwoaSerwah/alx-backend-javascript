import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    // Pass sqft to the parent class constructor
    super(sqft);

    // Validate floors attribute
    if (typeof floors !== 'number') {
      throw new TypeError('Floors must be a number');
    }

    // Assign to private attribute
    this._floors = floors;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Override evacuationWarningMessage method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
