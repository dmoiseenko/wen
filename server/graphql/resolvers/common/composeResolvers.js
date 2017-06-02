const { createResolver } = require('apollo-resolvers');


module.exports = resolversArray => resolversArray.reduce(
  (resolversChain, resolver) => {
    if (typeof resolver === 'function') {
      return resolversChain.createResolver(resolver);
    }

    if (Array.isArray(resolver) && resolver.length === 2) {
      return resolversChain.createResolver(resolver[0], resolver[1]);
    }

    throw new Error('Invalid resolver');
  },
  createResolver()
);
