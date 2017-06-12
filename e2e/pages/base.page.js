const config = require('../../common/config.js');


class Page {
  open(path) {
    return browser.url(`http://${config.server.host}:${config.server.port}${path}`);
  }

  back() {
    browser.back();
  }
}

module.exports = Page;
