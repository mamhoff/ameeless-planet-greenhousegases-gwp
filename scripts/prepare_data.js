const fs = require('fs');
const neatCsv = require('neat-csv');
const numericHeaders = [
  'GWP',
  'residenceTime',
  'gwp_SAR_100',
  'gwp_4AR_20',
  'gwp_4AR_100',
  'gwp_4AR_500',
];
const csvData = fs.readFileSync('data/data.csv', "utf8");
neatCsv(csvData, {
  mapValues: ({ header, index, value }) => {
    if (numericHeaders.includes(header) ) {
      return parseFloat(value) ? parseFloat(value) : null
    } else return value
  }
}).then(function (data) {
  fs.writeFileSync(__dirname + '/../data/data.json', JSON.stringify(data));
})
