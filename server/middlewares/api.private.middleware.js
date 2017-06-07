const setupRoutes = require('../utils/setupRoutes.js');
const graphql = require('../routes/api/graphql/api.graphql.route');
const graphiql = require('../routes/api/graphiql/api.graphiql.route');


module.exports = () => setupRoutes([
  graphql,
  graphiql,
]);
