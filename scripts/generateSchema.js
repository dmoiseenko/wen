const fs = require('fs');
const { buildSchema, introspectionQuery } = require('graphql/utilities');
const { graphql } = require('graphql');

const schemaString = require('../common/graphql/schemaString');


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
