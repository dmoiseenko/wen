const LoginPage = require('../pages/login.page');
const HomePage = require('../pages/home.page');


module.exports = function logIn() {
  LoginPage.open();
  LoginPage.emailInput.setValue('js@mail.com');
  LoginPage.passwordInput.setValue('password');
  LoginPage.loginButton.click();
  HomePage.waitForLoad();
};
