'use strict';

const directions = require('./directions');

module.exports = class Rover {

  constructor(direction) {
    this._coordinates = {
      x: 0,
      y: 0
    },
      this._direction = direction
  }

  move(commands) {
    try {
      this._directionChecker();
      for (let command of commands.split('')) {
        command === 'F' ? this._makeStep() : this._chooseDirection(command);
      }
    } catch (e) {
      console.log(e);
    }
  }

  coordinates() {
    return this._coordinates
  }

  _chooseDirection(command) {
    if (typeof command !== 'string') throw new Error('Command should be a string!');

    switch (command.toUpperCase()) {
      case 'L':
        this._direction === directions.east ?
          this._direction = directions.north :
          console.log("Can't move there, only to North or East!");
        break;
      case 'R':
        this._direction === directions.north ?
          this._direction = directions.east :
          console.log("Can't move there, only to North or East!");
        break;
      default:
        console.log('Unknown direction!')
        break;
    }
  }

  _makeStep() {
    this._direction === directions.north ? this._coordinates.y++ : this._coordinates.x++
  }

  _directionChecker() {
    if (!(this._direction === directions.north || this._direction === directions.east)) {
      throw new Error(
        `Directions to move, should only be "Nort" or "East"!
        Use "coordinates" object please!`
      );
    }
  }

}
