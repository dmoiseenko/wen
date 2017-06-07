const path = require('path');
const { makeExecutableSchema } = require('graphql-tools');

const loadTextFile = require('../../common/loadTextFile.js');


const typeDefs = loadTextFile(path.join(__dirname, '../../common/graphql/schema.graphqls'));
const resolvers = require('./resolvers/resolvers');

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
