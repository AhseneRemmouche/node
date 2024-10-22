const fs = require('fs');
const {parse} = require('csv-parse');
const result = [];

fs.createReadStream('./kepler-data.csv').pipe(parse({comment:'#', col}))