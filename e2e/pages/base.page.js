class Page {
  open(path) {
    return browser.url(`/${path}`);
  }

  back() {
    browser.back();
  }
}

module.exports = new Page();
