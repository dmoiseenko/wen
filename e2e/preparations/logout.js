const LoginPage = require('../pages/login.page.js');


module.exports = function logOut() {
  browser.deleteCookie('wen');
  LoginPage.open();
  LoginPage.waitForLoad();
};
