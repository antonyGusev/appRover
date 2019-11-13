const Rover = require('./rover');
const directions = require('./directions');

const rover1 = new Rover(directions.north);
const rover2 = new Rover(directions.east);

rover1.move('FRFLIKSRFRLR');
console.log(rover1.coordinates());

rover2.move('HJDFRFLRFDSIRR');
console.log(rover1.coordinates());
