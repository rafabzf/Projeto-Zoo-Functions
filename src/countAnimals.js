const data = require('../data/zoo_data');

const { species } = data;

const resultado = {};

function countAnimals(animal) {
  if (animal === undefined) {
    species.forEach((i) => {
      resultado[i.name] = i.residents.length;
    });
    return resultado;
  }
  if (animal.sex !== undefined) {
    return species.find((i) => i.name === animal.specie)
      .residents.filter((a) => a.sex === animal.sex).length;
  }
  return species.find((i) => i.name === animal.specie).residents.length;
}

module.exports = countAnimals;
