const fs = require('fs');
const path = require('path');
const { buildSchema, introspectionQuery } = require('graphql/utilities');
const { graphql } = require('graphql');

const loadTextFile = require('../common/loadTextFile.js');

const schemaString = loadTextFile(path.join(__dirname, '../common/graphql/schema.graphqls'));
const schema = buildSchema(schemaString);

graphql(schema, introspectionQuery)
  .then((result) => {
    fs.writeFileSync(
      'graphql.schema.json',
      JSON.stringify(result, null, 2));
  })
  .catch((err) => {
    console.log(err); // eslint-disable-line no-console
  });
