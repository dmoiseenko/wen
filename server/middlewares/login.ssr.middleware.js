/* eslint-disable import/no-unresolved, global-require */

const { renderToStaticMarkup, renderToString } = require('react-dom/server');


const isProduction = process.env.NODE_ENV === 'production';


let html;
let appComponent;
let htmlComponent;

function render() {
  appComponent = require('../../build/login/server').default;
  htmlComponent = require('../../build/login/html').default;

  let assets;
  if (isProduction) {
    assets = require('../../public/login/assets.json');
  }

  const root = renderToString(appComponent());
  html = renderToStaticMarkup(htmlComponent({ root, assets }));
}

render();


module.exports = () => async (ctx) => {
  if (!isProduction) {
    delete require.cache[require.resolve('../../build/login/server')];
    delete require.cache[require.resolve('../../build/login/html')];
    render();
  }
  ctx.response.body = `<!DOCTYPE html>${html}`;
};

/* eslint-enable import/no-unresolved, global-require */
