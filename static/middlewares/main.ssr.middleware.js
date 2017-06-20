/* eslint-disable import/no-unresolved, global-require */

const { renderToStringWithData } = require('react-apollo');
const { renderToStaticMarkup } = require('react-dom/server');
const { getLocalClient } = require('../../server/graphql/client.js');


const isProduction = process.env.NODE_ENV === 'production';

let appComponent = require('../../build/main/server').default;
let htmlComponent = require('../../build/main/html').default;

let assets;
if (isProduction) {
  assets = require('../../public/main/assets.json');
}

async function render(ctx) {
  const client = getLocalClient({ user: ctx.state.user });

  const app = appComponent({ apolloClient: client, location: ctx.url });

  const renderedAppWithData = await renderToStringWithData(app);

  const initialState = { apollo: client.getInitialState() };

  return renderToStaticMarkup(htmlComponent({
    root: renderedAppWithData,
    state: initialState,
    assets
  }));
}

module.exports.render = render;

module.exports = () => async (ctx) => {
  if (!isProduction) {
    delete require.cache[require.resolve('../../build/main/server')];
    delete require.cache[require.resolve('../../build/main/html')];
    appComponent = require('../../build/main/server').default;
    htmlComponent = require('../../build/main/html').default;
  }

  const html = await render(ctx);

  ctx.response.body = `<!DOCTYPE html>${html}`;
};

/* eslint-enable import/no-unresolved, global-require */
