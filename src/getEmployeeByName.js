const data = require('../data/zoo_data');

const { employees } = data;

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};

  return employees.find((employee) => (
    employee.firstName === employeeName || employee.lastName === employeeName
  ));
}

module.exports = getEmployeeByName;
