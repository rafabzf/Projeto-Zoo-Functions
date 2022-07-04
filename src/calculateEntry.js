const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const object = {
    adult: 0,
    senior: 0,
    child: 0,
  };
  entrants.forEach((element) => {
    if (element.age >= 18 && element.age < 50) {
      object.adult += 1;
    } else if (element.age >= 50) {
      object.senior += 1;
    } else if (element.age < 18) {
      object.child += 1;
    }
  });
  return object;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;

  const visitantes = countEntrants(entrants);
  const priceAdult = visitantes.adult * data.prices.adult;
  const priceSenior = visitantes.senior * data.prices.senior;
  const priceChild = visitantes.child * data.prices.child;

  return priceAdult + priceSenior + priceChild;
}

module.exports = { calculateEntry, countEntrants };
