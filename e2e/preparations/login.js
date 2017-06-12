const LoginPage = require('../pages/login.page');


module.exports = function logIn() {
  LoginPage.open();
  LoginPage.emailInput.setValue('admin@email.diq');
  LoginPage.passwordInput.setValue('20AltaSigma16');
  LoginPage.loginButton.click();
};
