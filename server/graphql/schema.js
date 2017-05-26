const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = require('../../common/graphql/schemaString');
const resolvers = require('./resolvers/resolvers');


module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
