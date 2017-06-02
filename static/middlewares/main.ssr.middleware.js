/* eslint-disable import/no-unresolved, global-require */

const { createLocalInterface } = require('apollo-local-query');
const graphql = require('graphql');
const { ApolloClient, renderToStringWithData } = require('react-apollo');
const { renderToStaticMarkup } = require('react-dom/server');
const schema = require('../../server/graphql/schema');

const isProduction = process.env.NODE_ENV === 'production';

let appComponent;
let htmlComponent;
let assets;
if (isProduction) {
  appComponent = require('../../build/main/server').default;
  htmlComponent = require('../../build/main/html').default;
  assets = require('../../public/main/assets.json');
}

module.exports = () => async (ctx) => {
  if (!isProduction) {
    delete require.cache[require.resolve('../../build/main/server')];
    delete require.cache[require.resolve('../../build/main/html')];
    appComponent = require('../../build/main/server').default;
    htmlComponent = require('../../build/main/html').default;
  }

  const context = {};

  const client = new ApolloClient({
    ssrMode: true,
    networkInterface: createLocalInterface(
      graphql,
      schema,
      { context: { user: ctx.state.user } }
    )
  });

  const app = appComponent({ apolloClient: client, location: ctx.url, context });

  const renderedAppWithData = await renderToStringWithData(app);

  const initialState = { apollo: client.getInitialState() };

  const html = renderToStaticMarkup(htmlComponent({
    root: renderedAppWithData,
    state: initialState,
    assets
  }));

  ctx.response.body = `<!DOCTYPE html>${html}`;
};

/* eslint-enable import/no-unresolved, global-require */
