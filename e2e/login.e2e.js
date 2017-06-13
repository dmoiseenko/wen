const LoginPage = require('./pages/login.page');
const logOut = require('./preparations/logout');
const HomePage = require('./pages/home.page');


describe('Login', () => {
  beforeEach(() => {
    logOut();
  });

  it('should be able to login with correct credentials', () => {
    LoginPage.open();
    LoginPage.waitForLoad();
    LoginPage.emailInput.setValue('js@mail.com');
    LoginPage.passwordInput.setValue('password');
    LoginPage.loginButton.click();
    HomePage.waitForLoad();

    const actual = HomePage.isOpen();

    expect(actual).toEqual(true);
  });

  it('should not be able to login with incorrect email', () => {
    LoginPage.open();
    LoginPage.waitForLoad();
    LoginPage.emailInput.setValue('js1@mail.com');
    LoginPage.passwordInput.setValue('password');
    LoginPage.loginButton.click();

    const actual = HomePage.wasNotLoad();

    expect(actual).toEqual(true);
  });

  it('should not be able to login with incorrect password', () => {
    LoginPage.open();
    LoginPage.waitForLoad();
    LoginPage.emailInput.setValue('js@mail.com');
    LoginPage.passwordInput.setValue('pass1word');
    LoginPage.loginButton.click();

    const actual = HomePage.wasNotLoad();

    expect(actual).toEqual(true);
  });

  it('should show error message if password is incorrect', () => {
    LoginPage.open();
    LoginPage.waitForLoad();
    LoginPage.emailInput.setValue('js@mail.com');
    LoginPage.passwordInput.setValue('pass1word');
    LoginPage.loginButton.click();
    LoginPage.passwordError.waitForExist();

    const actual = LoginPage.passwordError.getText();

    expect(actual).toEqual('Invalid email or password');
  });

  it('should show error message if email is incorrect', () => {
    LoginPage.open();
    LoginPage.waitForLoad();
    LoginPage.emailInput.setValue('js1@mail.com');
    LoginPage.passwordInput.setValue('password');
    LoginPage.loginButton.click();
    LoginPage.emailError.waitForExist();

    const actual = LoginPage.emailError.getText();

    expect(actual).toEqual('Invalid email or password');
  });
});
