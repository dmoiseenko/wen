const { createLocalInterface } = require('apollo-local-query');
const { ApolloClient } = require('react-apollo');
const graphql = require('graphql');

const schema = require('./schema');


module.exports.getLocalClient = function getLocalClient(context) {
  return new ApolloClient({
    ssrMode: true,
    networkInterface: createLocalInterface(
      graphql,
      schema,
      { context }
    )
  });
};
