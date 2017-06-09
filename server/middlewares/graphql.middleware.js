const { graphqlKoa } = require('graphql-server-koa');

const schema = require('../graphql/schema');


module.exports = () => graphqlKoa(ctx => ({
  schema,
  context: { user: ctx.state.user }
}));
