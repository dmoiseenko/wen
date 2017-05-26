const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = require('../../common/graphql/schemaString');
const resolvers = require('./resolvers/index.resolver');


module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
