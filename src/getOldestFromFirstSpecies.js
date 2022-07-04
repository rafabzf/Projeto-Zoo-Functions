const data = require('../data/zoo_data');

const { employees, species } = data;

function getOldestFromFirstSpecies(id) {
  const pessoa = employees.find((employee) => employee.id === id);
  const animal = pessoa.responsibleFor[0];
  const resultado = species.find((specie) => specie.id === animal).residents
    .reduce((acc, curr) => {
      if (acc.age > curr.age) return acc;
      return curr;
    });
  return Object.values(resultado);
}

module.exports = getOldestFromFirstSpecies;
