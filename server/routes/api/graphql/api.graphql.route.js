const bodyParser = require('koa-body');
const { graphqlKoa, graphiqlKoa } = require('graphql-server-koa');

const schema = require('../../../graphql/schema');


const isProduction = process.env.NODE_ENV === 'production';

module.exports = (router) => {
  router.post(
    '/api/graphql',
    bodyParser(),
    graphqlKoa(ctx => ({
      schema,
      context: { user: ctx.state.user }
    })));

  if (!isProduction) {
    router.get(
      '/api/graphiql',
      bodyParser(),
      graphiqlKoa({ endpointURL: '/api/graphql' }));
  }
};
