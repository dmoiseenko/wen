const fs = require('fs');
const path = require('path');


const schemaPath = path.join(__dirname, './schema.graphqls');
const schemaString = fs.readFileSync(schemaPath, 'utf8');

module.exports = schemaString;
