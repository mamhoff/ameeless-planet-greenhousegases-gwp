const fs = require('fs').promises;
const neatCsv = require('neat-csv');
const readData = async (dataFile) => {
  try {
    const dataFile = await fs.open(dataFile, 'utf-8');
    const data = await dataFile.readFile();
    console.log(data);
    await dataFile.close();
    return data();
  } catch (e) {
    throw new Error(`Failed to load data file at ${dataFile}`);
  }
}
readData('../data/data.csv');
