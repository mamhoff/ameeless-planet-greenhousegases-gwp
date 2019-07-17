const gwpData = require('../data/data.json');

const getData = function(gas) {
  const match = gwpData.find(function (entry) {
    return (entry.gas === gas)
  });
  if (match === undefined) {
    throw new Error('Gas not found!')
  }
  return match;
}

module.exports.getData = getData;
