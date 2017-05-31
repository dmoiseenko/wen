const { createResolver } = require('apollo-resolvers');


module.exports = resolvers => resolvers.reduce(
  (resolversChain, resolver) => {
    if (typeof resolver === 'function') {
      return resolversChain.createResolver(resolver);
    }

    if (Array.isArray(resolver)) {
      if (resolver.length === 1) {
        return resolversChain.createResolver([0]);
      }

      if (resolver.length === 2) {
        return resolversChain.createResolver([0], [1]);
      }
    }

    throw new Error('Invalid resolver');
  },
  createResolver()
);
