const { graphiqlKoa } = require('graphql-server-koa');


module.exports = () => graphiqlKoa({ endpointURL: '/api/graphql' });
