/* eslint-disable import/no-unresolved, global-require */

const { renderToStaticMarkup, renderToString } = require('react-dom/server');


const isProduction = process.env.NODE_ENV === 'production';

let appComponent;
let htmlComponent;
if (isProduction) {
  appComponent = require('../../build/login/server').default;
  htmlComponent = require('../../build/login/html').default;
}

module.exports = () => async (ctx) => {
  let assets;
  if (!isProduction) {
    delete require.cache[require.resolve('../../build/login/server')];
    delete require.cache[require.resolve('../../build/login/html')];
    appComponent = require('../../build/login/server').default;
    htmlComponent = require('../../build/login/html').default;
  } else {
    assets = require('../../public/login/assets.json');
  }

  const root = renderToString(appComponent());

  const html = renderToStaticMarkup(htmlComponent({ root, assets }));

  ctx.response.body = `<!DOCTYPE html>${html}`;
};

/* eslint-enable import/no-unresolved, global-require */
