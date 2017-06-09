jest.mock('../../utils/setupRoutes.js', () => jest.fn(() => 'composition'));

const setupRoutes = require('../../utils/setupRoutes.js');
const middleware = require('../api.private.middleware');
const graphql = require('../../routes/api/graphql/api.graphql.route');
const graphiql = require('../../routes/api/graphiql/api.graphiql.route');


it('should have proper composition', () => {
  const actual = middleware();

  expect(setupRoutes).toHaveBeenCalledWith([
    graphql,
    graphiql
  ]);
  expect(actual).toEqual('composition');
});
