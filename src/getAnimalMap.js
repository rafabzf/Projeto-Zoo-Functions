const data = require('../data/zoo_data');

const { species } = data;

function animalArray({ residents }, sexo) {
  const array = [];
  residents.forEach(({ name, sex }) => {
    if (sexo) {
      if (sexo === sex) array.push(name);
    } else {
      array.push(name);
    }
  });
  return array;
}

function names(parametro) {
  const obj = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.forEach((specie) => {
    const obj2 = {};
    obj2[specie.name] = animalArray(specie, parametro.sex);
    if (parametro.sorted) obj2[specie.name].sort();
    obj[specie.location].push(obj2);
  });
  return obj;
}

function semParametro() {
  const objeto = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  species.forEach(({ location, name }) => objeto[location].push(name));
  return objeto;
}

function getAnimalMap(options) {
  if (!options || !options.includeNames) return semParametro();
  return names(options);
}

module.exports = getAnimalMap;
