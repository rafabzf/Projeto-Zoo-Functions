const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const selectAnimal = species.filter((element1) => element1.name === animal)[0].residents;
  return selectAnimal.every((element) => element.age >= age);
}
module.exports = getAnimalsOlderThan;
